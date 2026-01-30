import {
  callReadOnlyFunction,
  cvToJSON,
  uintCV,
} from "@stacks/transactions";
import {
  getStacksContractAddress,
  getStacksContractName,
} from "./stacks-config";
import { getStacksNetwork } from "./stacks-network";

type ClarityJson = {
  type: string;
  value: any;
  success?: boolean;
};

export type GuessTheHashConfig = {
  feeTreasury: string;
  feeBps: bigint;
  resolverTipUstx: bigint;
  nextBetId: bigint;
};

export type GuessTheHashBet = {
  bettor: string;
  placedHeight: bigint;
  targetHeight: bigint;
  stakePerCharUstx: bigint;
  choiceBitmap: bigint;
  totalStakeUstx: bigint;
  feeUstx: bigint;
  resolved: boolean;
  resolvedHeight: bigint | null;
  outcomeDigit: number | null;
  won: boolean;
};

function unwrapClarityValue(value: any): any {
  if (!value || typeof value !== "object") {
    return value;
  }
  if ("value" in value && "type" in value) {
    if (value.value === null) {
      return null;
    }
    return unwrapClarityValue(value.value);
  }
  if (Array.isArray(value)) {
    return value.map((entry) => unwrapClarityValue(entry));
  }
  const result: Record<string, any> = {};
  Object.entries(value).forEach(([key, entry]) => {
    result[key] = unwrapClarityValue(entry);
  });
  return result;
}

function toBigInt(value: any): bigint | null {
  if (value === null || value === undefined) {
    return null;
  }
  try {
    return BigInt(value);
  } catch {
    return null;
  }
}

function requireContractConfig(): { address: string; name: string } {
  const address = getStacksContractAddress();
  const name = getStacksContractName();
  if (!address || !name) {
    throw new Error("Stacks contract env vars are missing.");
  }
  return { address, name };
}

export async function fetchGuessTheHashConfig(
  senderAddress: string,
): Promise<GuessTheHashConfig> {
  const { address, name } = requireContractConfig();
  const response = await callReadOnlyFunction({
    contractAddress: address,
    contractName: name,
    functionName: "get-config",
    functionArgs: [],
    senderAddress,
    network: getStacksNetwork(),
  });
  const json = cvToJSON(response) as ClarityJson;
  const raw = unwrapClarityValue(json);
  return {
    feeTreasury: raw["fee-treasury"],
    feeBps: toBigInt(raw["fee-bps"]) ?? 0n,
    resolverTipUstx: toBigInt(raw["resolver-tip-ustx"]) ?? 0n,
    nextBetId: toBigInt(raw["next-bet-id"]) ?? 0n,
  };
}

export async function fetchGuessTheHashBet(
  betId: bigint,
  senderAddress: string,
): Promise<GuessTheHashBet | null> {
  const { address, name } = requireContractConfig();
  const response = await callReadOnlyFunction({
    contractAddress: address,
    contractName: name,
    functionName: "get-bet",
    functionArgs: [uintCV(betId)],
    senderAddress,
    network: getStacksNetwork(),
  });
  const json = cvToJSON(response) as ClarityJson;
  const raw = unwrapClarityValue(json);
  if (!raw) {
    return null;
  }
  return {
    bettor: raw.bettor,
    placedHeight: toBigInt(raw["placed-height"]) ?? 0n,
    targetHeight: toBigInt(raw["target-height"]) ?? 0n,
    stakePerCharUstx: toBigInt(raw["stake-per-char-ustx"]) ?? 0n,
    choiceBitmap: toBigInt(raw["choice-bitmap"]) ?? 0n,
    totalStakeUstx: toBigInt(raw["total-stake-ustx"]) ?? 0n,
    feeUstx: toBigInt(raw["fee-ustx"]) ?? 0n,
    resolved: Boolean(raw.resolved),
    resolvedHeight: toBigInt(raw["resolved-height"]),
    outcomeDigit:
      raw["outcome-digit"] === null || raw["outcome-digit"] === undefined
        ? null
        : Number(raw["outcome-digit"]),
    won: Boolean(raw.won),
  };
}
