import { NextResponse } from "next/server";
import {
  createPublicClient,
  defineChain,
  http,
  isAddress,
  type Address,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base, baseSepolia, mainnet, optimism, celo } from "viem/chains";
import { receiptAbi } from "@/lib/receipt-abi";
import {
  getNotaReceiptContractAddressForChainId,
  getNotaReceiptDefaultChainId,
} from "@/lib/nota-receipt-config";

const rpcUrl = process.env.RECEIPT_RPC_URL;
const signerKey = process.env.RECEIPT_SIGNER_PRIVATE_KEY;

const monad = defineChain({
  id: 143,
  name: "Monad",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://143.rpc.thirdweb.com/"] },
    public: { http: ["https://143.rpc.thirdweb.com/"] },
  },
});

const chainById = {
  [base.id]: base,
  [baseSepolia.id]: baseSepolia,
  [mainnet.id]: mainnet,
  [optimism.id]: optimism,
  [celo.id]: celo,
  [monad.id]: monad,
};

type SignRequest = {
  address: string;
  id: number;
  chainId?: number;
};

export async function POST(request: Request) {
  try {
    if (!rpcUrl || !signerKey) {
      return NextResponse.json(
        { error: "Missing signer configuration." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as Partial<SignRequest>;
    if (!body.address || typeof body.id !== "number") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }
    if (!isAddress(body.address)) {
      return NextResponse.json(
        { error: "Invalid wallet address." },
        { status: 400 },
      );
    }
    const address = body.address as Address;
    const chainId = Number(body.chainId ?? getNotaReceiptDefaultChainId());
    const contractAddress = getNotaReceiptContractAddressForChainId(
      chainId,
      "server",
    );
    if (!contractAddress) {
      return NextResponse.json(
        { error: "Receipt contract not configured for this chain." },
        { status: 400 },
      );
    }
    if (!isAddress(contractAddress)) {
      return NextResponse.json(
        { error: "Invalid contract address." },
        { status: 500 },
      );
    }
    const receiptChain = chainById[chainId];
    if (!receiptChain) {
      return NextResponse.json(
        { error: "Unsupported chain." },
        { status: 400 },
      );
    }
    const receiptContract = contractAddress as Address;

    const publicClient = createPublicClient({
      chain: receiptChain,
      transport: http(rpcUrl),
    });

    const [nonce, price] = await Promise.all([
      publicClient.readContract({
        address: receiptContract,
        abi: receiptAbi,
        functionName: "nonces",
        args: [address],
      }),
      publicClient.readContract({
        address: receiptContract,
        abi: receiptAbi,
        functionName: "mintPrice",
      }),
    ]);

    const deadline = BigInt(Math.floor(Date.now() / 1000) + 10 * 60);

    const account = privateKeyToAccount(signerKey as `0x${string}`);

    const signature = await account.signTypedData({
      domain: {
        name: "NOTAContentReceipt",
        version: "1",
        chainId: receiptChain.id,
        verifyingContract: receiptContract,
      },
      types: {
        NOTAMintRequest: [
          { name: "to", type: "address" },
          { name: "id", type: "uint256" },
          { name: "price", type: "uint256" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      },
      primaryType: "NOTAMintRequest",
      message: {
        to: address,
        id: BigInt(body.id),
        price,
        nonce,
        deadline,
      },
    });

    return NextResponse.json({
      signature,
      nonce: nonce.toString(),
      price: price.toString(),
      deadline: deadline.toString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
