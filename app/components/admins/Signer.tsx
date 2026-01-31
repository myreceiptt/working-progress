"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { isAddress } from "viem";

type SignerProps = {
  signer?: string;
  submitLabel: string;
  submitDisabled: boolean;
  onSubmit: (nextSigner: `0x${string}`) => Promise<void> | void;
};

function truncateAddress(address: string) {
  const value = address.trim();
  if (value.length <= 12) {
    return value;
  }
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}

export default function Signer({
  signer,
  submitLabel,
  submitDisabled,
  onSubmit,
}: SignerProps) {
  const [draft, setDraft] = useState("");
  const [dirty, setDirty] = useState(false);
  const effectiveInput = dirty ? draft : signer ?? "";
  const [copied, setCopied] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const isInputValid = useMemo(() => {
    if (!effectiveInput.trim()) {
      return false;
    }
    return isAddress(effectiveInput);
  }, [effectiveInput]);

  const helperText = useMemo(() => {
    if (submitFailed) {
      return "Update signer is failed.";
    }
    if (!isInputValid) {
      return "Signer must be a valid address.";
    }
    return "Signer address is valid.";
  }, [isInputValid, submitFailed]);

  const copyText = useCallback(async (text: string) => {
    if (!text) {
      return;
    }
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch {
      // fall through to legacy approach
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }, []);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Signer</div>

        <div className="px-3 py-2 text-sm text-zinc-200">
          <span>Current: </span>
          {typeof signer === "string" ? (
            <button
              type="button"
              title={signer}
              onClick={async () => {
                try {
                  await copyText(signer);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
              className={`inline-flex text-xs text-zinc-500 font-mono rounded-md border bg-black/40 px-2 py-1 text-left transition-colors ${
                copied
                  ? "border-zinc-500 text-zinc-200"
                  : "border-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
              }`}>
              {truncateAddress(signer)}
            </button>
          ) : (
            <span className="wrap-break-word">Loading...</span>
          )}
        </div>

        {copied ? (
          <div className="text-xs text-zinc-500">Copied signer address.</div>
        ) : (
          <div className="text-xs text-zinc-500">
            Tap/click the signer chip to copy.
          </div>
        )}
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Set Signer Address</label>
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
        <div className="text-xs text-zinc-500">
          {helperText}
        </div>
      </div>
      <button
        type="button"
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={async () => {
          if (!isInputValid) {
            return;
          }
          try {
            await onSubmit(effectiveInput as `0x${string}`);
            setSubmitFailed(false);
          } catch {
            setSubmitFailed(true);
          }
        }}
        disabled={submitDisabled || !isInputValid}>
        {submitLabel}
      </button>
    </>
  );
}
