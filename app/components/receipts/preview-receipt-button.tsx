"use client";

import { useMemo, useState } from "react";
import { useActiveAccount, useActiveWalletChain } from "thirdweb/react";
import ReceiptPreviewModal from "@/app/components/receipts/receipt-preview-modal";
import { getNotaReceiptContractAddress } from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";

type PreviewReceiptButtonProps = {
  receiptId: number;
  className?: string;
};

export default function PreviewReceiptButton({
  receiptId,
  className,
}: PreviewReceiptButtonProps) {
  const account = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const [open, setOpen] = useState(false);

  const contractReady = useMemo(() => {
    return Boolean(getNotaReceiptContractAddress(chainId));
  }, [chainId]);

  if (!account) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={
          className ??
          "rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        }
        onClick={() => setOpen(true)}
        disabled={!contractReady}>
        {contractReady
          ? "Preview Receipt"
          : "Preview unavailable on this chain"}
      </button>
      <ReceiptPreviewModal
        open={open}
        onClose={() => setOpen(false)}
        receiptId={receiptId}
      />
    </>
  );
}
