"use client";

import { useActiveAccount } from "thirdweb/react";

type ReadAllButtonProps = {
  label?: string;
  className?: string;
};

export default function ReadAllButton({
  label = "Claim All Receipts First",
  className,
}: ReadAllButtonProps) {
  const account = useActiveAccount();

  if (!account) {
    return null;
  }

  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <button
        type="button"
        disabled
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-center text-sm font-semibold text-zinc-100 disabled:cursor-not-allowed disabled:opacity-60">
        {label}
      </button>
    </div>
  );
}
