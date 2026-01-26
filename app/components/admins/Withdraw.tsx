"use client";

import { useMemo, useState } from "react";
import { formatEther, isAddress } from "viem";

type WithdrawProps = {
  address?: string;
  nativeSymbol: string;
  balanceWei: bigint | null;
  isBalanceLoading: boolean;
  onRefreshBalance: () => Promise<void> | void;
  submitLabel: string;
  submitDisabled: boolean;
  onSubmit: (to: `0x${string}`) => Promise<void> | void;
};

const DEFAULT_WITHDRAW_TO =
  "0x6522C8DD0c603D599359d40F30682fD4931e2b6d" as const;

export default function Withdraw({
  nativeSymbol,
  balanceWei,
  isBalanceLoading,
  onRefreshBalance,
  submitLabel,
  submitDisabled,
  onSubmit,
}: WithdrawProps) {
  const [draft, setDraft] = useState("");
  const [dirty, setDirty] = useState(false);
  const effectiveInput = dirty ? draft : DEFAULT_WITHDRAW_TO;
  const [submitFailed, setSubmitFailed] = useState(false);

  const isSafeWalletDestination = useMemo(() => {
    return (
      effectiveInput.trim().toLowerCase() ===
      DEFAULT_WITHDRAW_TO.toLowerCase()
    );
  }, [effectiveInput]);

  const balanceLabel = useMemo(() => {
    if (isBalanceLoading) {
      return "Loading...";
    }
    if (typeof balanceWei === "bigint") {
      return `${balanceWei.toString()} wei (${formatEther(
        balanceWei
      )} ${nativeSymbol})`;
    }
    return "Unavailable";
  }, [balanceWei, isBalanceLoading, nativeSymbol]);

  const withdrawAddressValid = useMemo(() => {
    if (!effectiveInput.trim()) {
      return false;
    }
    return isAddress(effectiveInput);
  }, [effectiveInput]);

  const helperText = useMemo(() => {
    if (submitFailed) {
      return "Withdraw is failed.";
    }
    if (!effectiveInput.trim()) {
      return "Enter the address to withdraw to.";
    }
    if (!withdrawAddressValid) {
      return "Withdraw destination must be a valid address.";
    }
    if (isSafeWalletDestination) {
      return "Withdraw destination is v1.0 Prof. NOTA Inc. Safe[WALLET].";
    }
    return "Withdraw destination is valid.";
  }, [effectiveInput, isSafeWalletDestination, submitFailed, withdrawAddressValid]);

  const withdrawButtonDisabled = useMemo(() => {
    if (!withdrawAddressValid) {
      return true;
    }
    return submitDisabled;
  }, [submitDisabled, withdrawAddressValid]);

  return (
    <>
      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Contract Balance</div>
        <div className="px-3 py-2 text-sm text-zinc-200">
          Balance: {balanceLabel}
        </div>
        <div className="text-xs text-zinc-500">
          Please withdraws the full contract balance to the{" "}
          <button
            type="button"
            className="cursor-pointer underline underline-offset-2 transition-colors hover:text-zinc-300"
            onClick={() => {
              setDraft("");
              setDirty(false);
              setSubmitFailed(false);
            }}
          >
            v1.0 Prof. NOTA Inc. Safe[WALLET]
          </button>
          .
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Withdraw To</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={effectiveInput}
          onChange={(event) => {
            setDirty(true);
            setDraft(event.target.value);
            setSubmitFailed(false);
          }}
          placeholder="0x..."
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <div className="text-xs text-zinc-500">{helperText}</div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={async () => {
            await onRefreshBalance();
          }}
          disabled={isBalanceLoading}>
          {isBalanceLoading ? "Refreshing..." : "Refresh Balance"}
        </button>
        <button
          type="button"
          className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={async () => {
            if (withdrawButtonDisabled) {
              return;
            }
            try {
              await onSubmit(effectiveInput as `0x${string}`);
              setSubmitFailed(false);
            } catch {
              setSubmitFailed(true);
            }
          }}
          disabled={withdrawButtonDisabled}>
          {submitLabel}
        </button>
      </div>
    </>
  );
}
