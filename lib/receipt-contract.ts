import { getContract } from "thirdweb";
import {
  base,
  baseSepolia,
  optimism,
  mainnet,
  celo,
  monad,
  type Chain,
} from "thirdweb/chains";
import { receiptAbi } from "@/lib/receipt-abi";
import { client } from "@/util/client";
import {
  getNotaReceiptContractAddressForChainId,
  getNotaReceiptDefaultChainId,
} from "@/lib/nota-receipt-config";

const chainById: Record<number, Chain> = {
  [base.id]: base,
  [baseSepolia.id]: baseSepolia,
  [mainnet.id]: mainnet,
  [optimism.id]: optimism,
  [celo.id]: celo,
  [monad.id]: monad,
};

export function getNotaReceiptChainById(chainId?: number): Chain {
  const resolvedId = chainId ?? getNotaReceiptDefaultChainId();
  return chainById[resolvedId] ?? chainById[getNotaReceiptDefaultChainId()];
}

export function getNotaReceiptContractAddress(chainId?: number): string | null {
  return getNotaReceiptContractAddressForChainId(chainId, "public");
}

export function getNotaReceiptContract(chainId?: number) {
  if (!client) {
    return null;
  }
  const chain = getNotaReceiptChainById(chainId);
  const address = getNotaReceiptContractAddress(chain.id);
  if (!address) {
    return null;
  }
  return getContract({
    client,
    chain,
    address,
    abi: receiptAbi,
  });
}
