import { NextResponse } from "next/server";
import {
  createPublicClient,
  defineChain,
  http,
  isAddress,
  type Address,
  type Chain,
} from "viem";
import { base, baseSepolia, mainnet, optimism, celo } from "viem/chains";
import {
  getNotaReceiptContractAddressForChainId,
  getNotaReceiptDefaultChainId,
} from "@/lib/nota-receipt-config";

const rpcUrl = process.env.RECEIPT_RPC_URL;

const monad = defineChain({
  id: 143,
  name: "Monad",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://143.rpc.thirdweb.com/"] },
    public: { http: ["https://143.rpc.thirdweb.com/"] },
  },
});

const chainById: Record<number, Chain> = {
  [base.id]: base,
  [baseSepolia.id]: baseSepolia,
  [mainnet.id]: mainnet,
  [optimism.id]: optimism,
  [celo.id]: celo,
  [monad.id]: monad,
};

type BalanceRequest = {
  chainId?: number;
};

export async function POST(request: Request) {
  try {
    if (!rpcUrl) {
      return NextResponse.json(
        { error: "Missing RPC configuration." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<BalanceRequest>;
    const chainId = Number(body.chainId ?? getNotaReceiptDefaultChainId());
    const contractAddress = getNotaReceiptContractAddressForChainId(
      chainId,
      "server"
    );
    if (!contractAddress) {
      return NextResponse.json(
        { error: "Receipt contract not configured for this chain." },
        { status: 400 }
      );
    }
    if (!isAddress(contractAddress)) {
      return NextResponse.json(
        { error: "Invalid contract address." },
        { status: 500 }
      );
    }
    const receiptChain = chainById[chainId];
    if (!receiptChain) {
      return NextResponse.json({ error: "Unsupported chain." }, { status: 400 });
    }

    const publicClient = createPublicClient({
      chain: receiptChain,
      transport: http(rpcUrl),
    });

    const balance = await publicClient.getBalance({
      address: contractAddress as Address,
    });

    return NextResponse.json({
      balanceWei: balance.toString(),
      chainId,
      contractAddress,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

