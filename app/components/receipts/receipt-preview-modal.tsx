"use client";

import { X, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useActiveWalletChain, useReadContract } from "thirdweb/react";
import ReceiptImage from "@/app/components/receipts/receipt-image";
import { getNotaReceiptContract } from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";

type ReceiptPreviewModalProps = {
  open: boolean;
  onClose: () => void;
  receiptId: number;
};

export default function ReceiptPreviewModal({
  open,
  onClose,
  receiptId,
}: ReceiptPreviewModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const walletChain = useActiveWalletChain();
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const contract = useMemo(() => getNotaReceiptContract(chainId), [chainId]);
  const readContract = useMemo(
    () => contract ?? getNotaReceiptContract(getNotaReceiptDefaultChainId()),
    [contract]
  );
  const safeReadContract = readContract!;

  const { data } = useReadContract({
    contract: safeReadContract,
    method: "getNOTAMetadata",
    params: [BigInt(receiptId)],
    queryOptions: {
      enabled: Boolean(contract && readContract),
    },
  });

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      setIsClosing(false);
      return;
    }

    if (isMounted) {
      setIsClosing(true);
    }
  }, [isMounted, open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!isMounted) {
    return null;
  }

  const panelAnimationClass = isClosing
    ? "animate-modal-out"
    : "animate-modal-in";
  const backdropAnimationClass = isClosing
    ? "animate-backdrop-out"
    : "animate-backdrop-in";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${backdropAnimationClass}`}
      />
      <div
        className={`relative w-full max-w-2xl rounded-xl border border-zinc-800 bg-black/90 p-4 text-zinc-200 shadow-2xl md:p-6 ${panelAnimationClass}`}
        onAnimationEnd={() => {
          if (!isClosing) {
            return;
          }
          setIsMounted(false);
          setIsClosing(false);
        }}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-xs md:text-sm text-zinc-400">
              Receipt Preview
            </div>
            <div className="truncate text-sm md:text-base text-zinc-100">
              ID #{receiptId}
              {data?.name ? ` — ${data.name}` : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-xs font-semibold text-zinc-200 transition-colors duration-300 hover:border-zinc-500 cursor-pointer">
            <X />
          </button>
        </div>

        <div className="my-4 grid gap-3">
          <ReceiptImage
            receiptId={receiptId}
            imageClassName="h-auto w-full rounded-md border border-zinc-800 bg-black/40 p-2"
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-xs md:text-sm text-zinc-400">
              Receipt Description
            </div>
            {data ? (
              <div className="truncate text-sm md:text-base text-zinc-100">
                {data.description}
              </div>
            ) : (
              <div className="truncate text-sm md:text-base text-zinc-100">
                Loading receipt details...
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              window.open(
                "/contract?tab=owned",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-xs font-semibold text-zinc-200 transition-colors duration-300 hover:border-zinc-500 cursor-pointer">
            <Wallet />
          </button>
        </div>
      </div>
    </div>
  );
}
