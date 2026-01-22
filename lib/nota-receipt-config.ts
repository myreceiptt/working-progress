export const NOTA_RECEIPT_PLACEHOLDER = "NOTA-PLACEHOLDER";

const NOTA_RECEIPT_CHAIN_IDS = {
  base: 8453,
  "base-sepolia": 84532,
  ethereum: 1,
  op: 10,
  celo: 42220,
  monad: 143,
} as const;

const PUBLIC_ENV_KEYS: Record<
  keyof typeof NOTA_RECEIPT_CHAIN_IDS,
  string
> = {
  base: "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_BASE",
  "base-sepolia": "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_BASE_SEPOLIA",
  ethereum: "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_ETHEREUM",
  op: "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_OP",
  celo: "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_CELO",
  monad: "NEXT_PUBLIC_NOTA_RECEIPT_CONTRACT_MONAD",
};

const SERVER_ENV_KEYS: Record<
  keyof typeof NOTA_RECEIPT_CHAIN_IDS,
  string
> = {
  base: "NOTA_RECEIPT_CONTRACT_BASE",
  "base-sepolia": "NOTA_RECEIPT_CONTRACT_BASE_SEPOLIA",
  ethereum: "NOTA_RECEIPT_CONTRACT_ETHEREUM",
  op: "NOTA_RECEIPT_CONTRACT_OP",
  celo: "NOTA_RECEIPT_CONTRACT_CELO",
  monad: "NOTA_RECEIPT_CONTRACT_MONAD",
};

const LEGACY_PUBLIC_BASE_KEY = "NEXT_PUBLIC_RECEIPT_CONTRACT_ADDRESS";

type EnvScope = "public" | "server";

export type NotaReceiptChainName = keyof typeof NOTA_RECEIPT_CHAIN_IDS;

export function getNotaReceiptDefaultChainName(): NotaReceiptChainName {
  const value =
    process.env.NEXT_PUBLIC_NOTA_RECEIPT_CHAIN_DEFAULT?.toLowerCase() ?? "base";
  if (value in NOTA_RECEIPT_CHAIN_IDS) {
    return value as NotaReceiptChainName;
  }
  return "base";
}

export function getNotaReceiptChainIdByName(
  name?: string,
): number {
  if (!name) {
    return NOTA_RECEIPT_CHAIN_IDS.base;
  }
  const normalized = name.toLowerCase();
  if (normalized in NOTA_RECEIPT_CHAIN_IDS) {
    return NOTA_RECEIPT_CHAIN_IDS[normalized as NotaReceiptChainName];
  }
  return NOTA_RECEIPT_CHAIN_IDS.base;
}

export function getNotaReceiptChainNameById(
  chainId: number,
): NotaReceiptChainName {
  const entry = Object.entries(NOTA_RECEIPT_CHAIN_IDS).find(
    ([, id]) => id === chainId,
  );
  if (entry) {
    return entry[0] as NotaReceiptChainName;
  }
  return "base";
}

export function getNotaReceiptDefaultChainId(): number {
  return getNotaReceiptChainIdByName(getNotaReceiptDefaultChainName());
}

export function getNotaReceiptContractAddressForChainId(
  chainId?: number,
  scope: EnvScope = "public",
): string | null {
  const resolvedId = chainId ?? getNotaReceiptDefaultChainId();
  const name = getNotaReceiptChainNameById(resolvedId);
  const key =
    scope === "public" ? PUBLIC_ENV_KEYS[name] : SERVER_ENV_KEYS[name];

  const primaryValue = process.env[key];
  const fallbackValue =
    scope === "server"
      ? process.env[PUBLIC_ENV_KEYS[name]]
      : undefined;
  const legacyBaseValue =
    name === "base" && scope === "public"
      ? process.env[LEGACY_PUBLIC_BASE_KEY]
      : undefined;

  const value = primaryValue ?? fallbackValue ?? legacyBaseValue ?? null;
  if (!value || value === NOTA_RECEIPT_PLACEHOLDER) {
    return null;
  }
  return value;
}

export function hasNotaReceiptContractForChainId(
  chainId?: number,
  scope: EnvScope = "public",
): boolean {
  return Boolean(getNotaReceiptContractAddressForChainId(chainId, scope));
}
