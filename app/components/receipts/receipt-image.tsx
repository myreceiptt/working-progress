"use client";

import { useMemo } from "react";
import Image from "next/image";
import {
  useActiveAccount,
  useActiveWalletChain,
  useReadContract,
} from "thirdweb/react";
import {
  getNotaReceiptContract,
  getNotaReceiptContractAddress,
} from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";

type ReceiptImageProps = {
  receiptId: number;
  className?: string;
  imageClassName?: string;
};

export default function ReceiptImage({
  receiptId,
  className,
  imageClassName,
}: ReceiptImageProps) {
  const account = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const receiptContract = useMemo(
    () => getNotaReceiptContract(chainId),
    [chainId]
  );
  const contractAddress = getNotaReceiptContractAddress(chainId);
  const readContract = useMemo(
    () =>
      receiptContract ?? getNotaReceiptContract(getNotaReceiptDefaultChainId()),
    [receiptContract]
  );
  const safeReadContract = readContract!;

  const { data: tokenUri } = useReadContract({
    contract: safeReadContract,
    method: "uri",
    params: [BigInt(receiptId)],
    queryOptions: {
      enabled: Boolean(readContract && receiptContract),
    },
  });

  const receiptImage = useMemo(() => {
    if (!tokenUri) {
      return null;
    }
    const [, base64] = tokenUri.split(",");
    if (!base64) {
      return null;
    }
    try {
      const json = JSON.parse(atob(base64));
      return typeof json.image === "string" ? json.image : null;
    } catch {
      return null;
    }
  }, [tokenUri]);

  if (!account || !receiptImage || !contractAddress) {
    return null;
  }

  return (
    <a
      href={`https://opensea.io/item/base/${contractAddress}/${receiptId}`}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <Image
        src={receiptImage}
        alt={`Receipt #${receiptId}`}
        width={400}
        height={400}
        unoptimized
        className={
          imageClassName ??
          "h-auto w-full max-w-sm place-self-center rounded-md border border-zinc-800 bg-black/40 p-2"
        }
      />
    </a>
  );
}
