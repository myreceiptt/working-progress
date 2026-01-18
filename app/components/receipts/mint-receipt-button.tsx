"use client";

import { useCallback, useMemo, useState } from "react";
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
  mintLabel = "Mint Receipt",
}: MintReceiptButtonProps) {
  const account = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const [error, setError] = useState<string | null>(null);
  const { mutate: sendTx, isPending: isLoading } = useSendTransaction();

  const address = account?.address;
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const receiptContract = useMemo(
    () => getNotaReceiptContract(chainId),
    [chainId],
  );
  const readContract = useMemo(
    () =>
      receiptContract ??
      getNotaReceiptContract(getNotaReceiptDefaultChainId()),
    [receiptContract],
  );
  const safeReadContract = readContract!;
  const receiptContractAddress = getNotaReceiptContractAddress(chainId);
  const contractReady = Boolean(receiptContract && receiptContractAddress);

  const { data: balance, refetch } = useReadContract(
    {
      contract: safeReadContract,
      method: "balanceOf",
      params: [
        address ?? "0x0000000000000000000000000000000000000000",
        BigInt(receiptId),
      ],
      queryOptions: {
        enabled: Boolean(address && contractReady && readContract),
      },
    },
  );

  const alreadyMinted = useMemo(() => {
    if (!balance) {
      return false;
    }
    return balance > BigInt(0);
  }, [balance]);

  const handleMint = useCallback(async () => {
    if (!address) {
      return;
    }
    setError(null);
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

      await sendTx(transaction);
      await refetch?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Mint failed.");
    }
  }, [address, receiptId, chainId, receiptContract, sendTx, refetch]);

  if (!address) {
    return null;
  }

  return (
    <div className="grid gap-2">
      <button
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleMint}
        disabled={!contractReady || alreadyMinted || isLoading}
      >
        {!contractReady
          ? "Unavailable on this chain"
          : alreadyMinted
            ? mintedLabel
            : isLoading
              ? "Minting..."
              : mintLabel}
      </button>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
