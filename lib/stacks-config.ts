import type { UserData } from "@stacks/auth";

export type StacksNetworkName = "testnet" | "mainnet";

export function getStacksNetworkName(): StacksNetworkName {
  const value = process.env.NEXT_PUBLIC_STACKS_NETWORK?.toLowerCase();
  if (value === "mainnet") {
    return "mainnet";
  }
  return "testnet";
}

export function getStacksContractAddress(): string | null {
  const value = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  return value ? value : null;
}

export function getStacksContractName(): string | null {
  const value = process.env.NEXT_PUBLIC_CONTRACT_NAME;
  return value ? value : null;
}

export function getStacksContractPrincipal(): string | null {
  const address = getStacksContractAddress();
  const name = getStacksContractName();
  if (!address || !name) {
    return null;
  }
  return `${address}.${name}`;
}

export function getStacksFeeBpsFromEnv(): string | null {
  const value = process.env.NEXT_PUBLIC_FEE_BPS;
  return value ? value : null;
}

export function getStacksResolverTipUstxFromEnv(): string | null {
  const value = process.env.NEXT_PUBLIC_RESOLVER_TIP_USTX;
  return value ? value : null;
}

export function getStacksAddressFromUserData(
  userData?: UserData,
  networkName: StacksNetworkName = getStacksNetworkName(),
): string | null {
  if (!userData) {
    return null;
  }
  const addresses = (userData.profile as { stxAddress?: Record<string, string> })
    ?.stxAddress;
  if (!addresses) {
    return null;
  }
  if (networkName === "mainnet") {
    return addresses.mainnet ?? null;
  }
  return addresses.testnet ?? null;
}
