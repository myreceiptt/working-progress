"use client";
import { useMemo } from "react";
import { useStacksWallet } from "./useStacksWallet";

export default function StacksWalletPanel() {
  const { status, address, error, networkName, connect, disconnect } =
    useStacksWallet();

  const networkWarning = useMemo(() => {
    return networkName !== "testnet";
  }, [networkName]);

  return (
    <div className="space-y-4">
      {networkWarning ? (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          Switch to Testnet.
        </div>
      ) : null}
      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/30 px-4 py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-zinc-400">Stacks wallet</p>
            <p className="text-lg font-semibold text-zinc-100">
              {address ?? "Not connected"}
            </p>
            <p className="text-xs text-zinc-500">
              Network: {networkName}
            </p>
          </div>
          {status === "connected" ? (
            <button
              type="button"
              onClick={disconnect}
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-500 hover:text-white">
              Disconnect
            </button>
          ) : (
            <button
              type="button"
              onClick={connect}
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-500 hover:text-white">
              {status === "connecting" ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
        </div>
        {error ? (
          <p className="mt-2 text-xs text-red-300">{error}</p>
        ) : null}
      </div>
    </div>
  );
}
