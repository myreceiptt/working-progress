import type { StacksNetworkName } from "./stacks-config";

export function shortenStacksAddress(address: string, size = 4): string {
  if (!address) {
    return "";
  }
  if (address.length <= size * 2 + 3) {
    return address;
  }
  return `${address.slice(0, size + 2)}...${address.slice(-size)}`;
}

export function getExplorerAddressUrl(
  principal: string,
  network: StacksNetworkName,
): string {
  return `https://explorer.hiro.so/address/${principal}?chain=${network}`;
}

export function getExplorerTxUrl(
  txid: string,
  network: StacksNetworkName,
): string {
  return `https://explorer.hiro.so/txid/${txid}?chain=${network}`;
}

export function toHexDigit(value: number): string {
  if (value >= 0 && value <= 9) {
    return value.toString(10);
  }
  if (value >= 10 && value <= 15) {
    return String.fromCharCode("a".charCodeAt(0) + (value - 10));
  }
  return value.toString(10);
}

export function bitmapToDigits(bitmap: bigint): number[] {
  const digits: number[] = [];
  for (let i = 0; i < 16; i += 1) {
    if ((bitmap & (1n << BigInt(i))) !== 0n) {
      digits.push(i);
    }
  }
  return digits;
}
