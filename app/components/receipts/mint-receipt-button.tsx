"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useActiveAccount,
  useActiveWalletChain,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import {
  getNotaReceiptContract,
  getNotaReceiptContractAddress,
} from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";

type MintReceiptButtonProps = {
  receiptId: number;
  mintedLabel?: string;
  mintLabel?: string;
};

export default function MintReceiptButton({
  receiptId,
  mintedLabel = "Receipt Minted",
  mintLabel = "Mint Receipt (NFT)",
}: MintReceiptButtonProps) {
  const account = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<
    | "idle"
    | "awaiting_wallet"
    | "sending"
    | "confirming"
    | "success"
    | "error"
  >("idle");
  const [dotCount, setDotCount] = useState(1);
  const { mutate: sendTx, isPending: isLoading } = useSendTransaction();

  const address = account?.address;
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const receiptContract = useMemo(
    () => getNotaReceiptContract(chainId),
    [chainId]
  );
  const readContract = useMemo(
    () =>
      receiptContract ?? getNotaReceiptContract(getNotaReceiptDefaultChainId()),
    [receiptContract]
  );
  const safeReadContract = readContract!;
  const receiptContractAddress = getNotaReceiptContractAddress(chainId);
  const contractReady = Boolean(receiptContract && receiptContractAddress);

  const { data: balance, refetch } = useReadContract({
    contract: safeReadContract,
    method: "balanceOf",
    params: [
      address ?? "0x0000000000000000000000000000000000000000",
      BigInt(receiptId),
    ],
    queryOptions: {
      enabled: Boolean(address && contractReady && readContract),
    },
  });

  const alreadyMinted = useMemo(() => {
    if (!balance) {
      return false;
    }
    return balance > BigInt(0);
  }, [balance]);

  useEffect(() => {
    if (alreadyMinted) {
      setError(null);
      setStatus("success");
    }
  }, [alreadyMinted]);

  useEffect(() => {
    if (status !== "confirming") {
      setDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [status]);

  const pollMinted = useCallback(async () => {
    for (let attempt = 0; attempt < 20; attempt += 1) {
      const result = await refetch?.();
      const nextBalance = result?.data ?? balance;
      if (typeof nextBalance === "bigint" && nextBalance > BigInt(0)) {
        setError(null);
        setStatus("success");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  }, [balance, refetch]);

  const handleMint = useCallback(async () => {
    if (!address) {
      return;
    }
    setError(null);
    setStatus("sending");
    try {
      const response = await fetch("/api/receipt-sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, id: receiptId, chainId }),
      });
      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error || "Failed to sign.");
      }
      const payload = await response.json();
      const price = BigInt(payload.price);
      const nonce = BigInt(payload.nonce);
      const deadline = BigInt(payload.deadline);

      if (!receiptContract) {
        throw new Error("Receipt contract unavailable on this chain.");
      }

      const transaction = prepareContractCall({
        contract: receiptContract,
        method: "mintNOTAWithSig",
        params: [
          {
            to: address,
            id: BigInt(receiptId),
            price,
            nonce,
            deadline,
          },
          payload.signature,
        ],
        value: price,
      });

      setStatus("awaiting_wallet");
      await sendTx(transaction);
      setStatus("confirming");
      await pollMinted();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Mint failed.");
      setStatus("error");
    }
  }, [address, receiptId, chainId, receiptContract, sendTx, pollMinted]);

  if (!address) {
    return null;
  }

  const confirmDots = ".".repeat(dotCount);
  const buttonLabel = !contractReady
    ? "Unavailable on this chain"
    : status === "error"
    ? "Failed. Try Again!"
    : status === "awaiting_wallet"
    ? "Confirm in wallet..."
    : status === "sending"
    ? "Minting..."
    : status === "confirming"
    ? confirmDots
    : status === "success" || alreadyMinted
    ? mintedLabel
    : mintLabel;

  return (
    <div className="grid gap-2">
      <button
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleMint}
        disabled={
          !contractReady ||
          alreadyMinted ||
          isLoading ||
          status === "awaiting_wallet" ||
          status === "sending" ||
          status === "confirming"
        }>
        {buttonLabel}
      </button>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
