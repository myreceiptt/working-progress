"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

function truncateAddress(address: string) {
  const value = address.trim();
  if (value.length <= 12) {
    return value;
  }
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}

type StatusProps = {
  chainId: number;
  address?: string;
  isAdminSelf?: boolean;
  configuredAdmins: string[];
};

export default function Status({
  chainId,
  address,
  isAdminSelf,
  configuredAdmins,
}: StatusProps) {
  const [copiedAdmin, setCopiedAdmin] = useState<string | null>(null);
  const normalizedAddress = useMemo(() => address?.toLowerCase(), [address]);
  const isWalletConfigured = useMemo(() => {
    if (!normalizedAddress) {
      return false;
    }
    return configuredAdmins.includes(normalizedAddress);
  }, [configuredAdmins, normalizedAddress]);

  const truncatedConfiguredAdmins = useMemo(
    () =>
      configuredAdmins.map((value) => ({
        full: value,
        short: truncateAddress(value),
      })),
    [configuredAdmins]
  );

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
    if (!copiedAdmin) {
      return;
    }
    const timer = window.setTimeout(() => setCopiedAdmin(null), 1200);
    return () => window.clearTimeout(timer);
  }, [copiedAdmin]);

  return (
    <>
      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Chain ID</div>
        <div className="px-3 py-2 text-sm text-zinc-200">{chainId}</div>
      </div>

      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Your Admin Status</div>
        <div className="px-3 py-2 text-sm text-zinc-200">
          {address ? (isAdminSelf ? "Admin" : "Not admin") : "Connect wallet"}
        </div>
      </div>

      <div className="grid gap-2">
        <div className="text-sm text-zinc-400">Configured Admins (env)</div>
        {truncatedConfiguredAdmins.length ? (
          <>
            <div className="px-3 py-2 flex flex-wrap gap-2 text-xs text-zinc-500 font-mono">
              {truncatedConfiguredAdmins.map((admin) => (
                <button
                  key={admin.full}
                  type="button"
                  title={admin.full}
                  onClick={async () => {
                    try {
                      await copyText(admin.full);
                      setCopiedAdmin(admin.full);
                    } catch {
                      setCopiedAdmin(null);
                    }
                  }}
                  className={`rounded-md border bg-black/40 px-2 py-1 text-left transition-colors ${
                    copiedAdmin === admin.full
                      ? "border-zinc-500 text-zinc-200"
                      : normalizedAddress === admin.full
                      ? "border-zinc-200 bg-zinc-200 text-black"
                      : "border-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
                  }`}>
                  {admin.short}
                </button>
              ))}
            </div>
            <>
              {copiedAdmin ? (
                <div className="text-xs text-zinc-500" title={copiedAdmin}>
                  Copied:{" "}
                  <span className="font-mono">
                    {truncateAddress(copiedAdmin)}
                  </span>
                </div>
              ) : (
                <div className="text-xs text-zinc-500">
                  Tap/click one to copy the full address.
                  {isWalletConfigured
                    ? " The one highlighted is your address."
                    : ""}
                </div>
              )}
            </>
          </>
        ) : (
          <div className="px-3 py-2 text-sm text-zinc-200">None configured</div>
        )}
      </div>
    </>
  );
}
