"use client";

import { useMemo, useState } from "react";
import { formatEther, parseEther } from "viem";

type MintPriceProps = {
  nativeSymbol: string;
  mintPrice?: bigint;
  submitLabel: string;
  submitDisabled: boolean;
  onSubmit: (nextMintPriceWei: bigint) => Promise<void> | void;
  onStatus?: (message: string | null) => void;
};

function formatWei(value?: bigint, nativeSymbol?: string) {
  if (typeof value !== "bigint") {
    return null;
  }
  return `${value.toString()} wei (${formatEther(value)} ${
    nativeSymbol ?? "ETH"
  })`;
}

export default function MintPrice({
  nativeSymbol,
  mintPrice,
  submitLabel,
  submitDisabled,
  onSubmit,
  onStatus,
}: MintPriceProps) {
  const [draft, setDraft] = useState("");
  const [dirty, setDirty] = useState(false);

  const effectiveInput = useMemo(() => {
    if (dirty) {
      return draft;
    }
    return typeof mintPrice === "bigint" ? formatEther(mintPrice) : "";
  }, [dirty, draft, mintPrice]);

  const parsed = useMemo(() => {
    const raw = effectiveInput.trim();
    if (!raw) {
      return { value: null as bigint | null, error: "Enter an amount." };
    }
    try {
      return { value: parseEther(raw), error: null as string | null };
    } catch {
      return { value: null as bigint | null, error: "Invalid amount." };
    }
  }, [effectiveInput]);

  return (
    <>
      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Mint Price</div>
        <div className="px-3 py-2 text-sm text-zinc-200">
          Current: {formatWei(mintPrice, nativeSymbol) ?? "Loading..."}
        </div>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">
          Set Mint Price ({nativeSymbol})
        </label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={effectiveInput}
          onChange={(event) => {
            setDirty(true);
            setDraft(event.target.value);
          }}
          placeholder="0"
          inputMode="decimal"
        />
        <div className="text-xs text-zinc-500">
          {parsed.error
            ? parsed.error
            : parsed.value !== null
            ? `Will set: ${parsed.value.toString()} wei (${formatEther(
                parsed.value
              )} ${nativeSymbol})`
            : null}
        </div>
      </div>
      <button
        type="button"
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={async () => {
          onStatus?.(null);
          if (parsed.error || parsed.value === null) {
            onStatus?.(parsed.error ?? "Invalid amount.");
            return;
          }
          await onSubmit(parsed.value);
        }}
        disabled={submitDisabled || Boolean(parsed.error)}>
        {submitLabel}
      </button>
    </>
  );
}
