"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import StacksWalletPanel from "../components/stacks/StacksWalletPanel";
import { useStacksWallet } from "../components/stacks/useStacksWallet";
import {
  getStacksContractAddress,
  getStacksContractName,
  getStacksContractPrincipal,
  getStacksNetworkName,
} from "@/lib/stacks-config";
import {
  fetchGuessTheHashConfig,
  type GuessTheHashConfig,
} from "@/lib/stacks-readonly";
import {
  getExplorerAddressUrl,
  shortenStacksAddress,
} from "@/lib/stacks-utils";

export default function GuessTheHashHome() {
  const { address } = useStacksWallet();
  const [config, setConfig] = useState<GuessTheHashConfig | null>(null);
  const [configStatus, setConfigStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  const [configError, setConfigError] = useState<string | null>(null);

  const contractAddress = getStacksContractAddress();
  const contractName = getStacksContractName();
  const contractPrincipal = getStacksContractPrincipal();
  const networkName = getStacksNetworkName();

  useEffect(() => {
    if (!contractAddress || !contractName) {
      setConfigStatus("error");
      setConfigError("Missing Stacks contract configuration.");
      return;
    }
    const senderAddress = address ?? contractAddress;
    setConfigStatus("loading");
    fetchGuessTheHashConfig(senderAddress)
      .then((result) => {
        setConfig(result);
        setConfigStatus("idle");
        setConfigError(null);
      })
      .catch((error) => {
        setConfigStatus("error");
        setConfigError(error instanceof Error ? error.message : String(error));
      });
  }, [address, contractAddress, contractName]);

  const lastBetId = useMemo(() => {
    if (!config) {
      return null;
    }
    if (config.nextBetId <= 1n) {
      return null;
    }
    return config.nextBetId - 1n;
  }, [config]);

  return (
    <>
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-6 max-w-5xl lg:px-8 md:space-y-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Guess The Hash
            </h2>
            <p className="mt-4 text-zinc-400">
              Read-only contract status and wallet connection for the Stacks
              testnet deployment.
            </p>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <Card>
            <div className="relative w-full h-full p-4 md:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Contract Status
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Network:{" "}
                  <span className="text-zinc-200">{networkName}</span>
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Contract:{" "}
                  {contractPrincipal ? (
                    <Link
                      className="underline text-zinc-200 hover:text-white"
                      href={getExplorerAddressUrl(
                        contractPrincipal,
                        networkName,
                      )}
                      target="_blank">
                      {shortenStacksAddress(contractPrincipal)}
                    </Link>
                  ) : (
                    <span className="text-zinc-200">Not configured</span>
                  )}
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/40 px-4 py-4">
                {configStatus === "loading" ? (
                  <p className="text-sm text-zinc-400">Loading config...</p>
                ) : null}
                {configStatus === "error" ? (
                  <p className="text-sm text-red-300">
                    {configError ?? "Unable to read contract config."}
                  </p>
                ) : null}
                {config ? (
                  <div className="space-y-2 text-sm text-zinc-300">
                    <p>
                      Fee (bps):{" "}
                      <span className="text-zinc-100">
                        {config.feeBps.toString()}
                      </span>
                    </p>
                    <p>
                      Resolver tip (uSTX):{" "}
                      <span className="text-zinc-100">
                        {config.resolverTipUstx.toString()}
                      </span>
                    </p>
                    <p>
                      Next bet ID:{" "}
                      <span className="text-zinc-100">
                        {config.nextBetId.toString()}
                      </span>
                    </p>
                    <p>
                      Last known bet ID:{" "}
                      <span className="text-zinc-100">
                        {lastBetId ? lastBetId.toString() : "None yet"}
                      </span>
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </Card>

          <Card>
            <div className="relative w-full h-full p-4 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-zinc-100">
                Wallet Connection
              </h3>
              <StacksWalletPanel />
            </div>
          </Card>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
