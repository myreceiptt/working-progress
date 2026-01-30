import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { getStacksNetworkName } from "./stacks-config";

export function getStacksNetwork() {
  const networkName = getStacksNetworkName();
  if (networkName === "mainnet") {
    return new StacksMainnet();
  }
  return new StacksTestnet();
}
