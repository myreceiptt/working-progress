"use client";
import { client } from "../../../util/client";
import {
  mainnet,
  optimism,
  base,
  baseSepolia,
  monad,
  celo,
} from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email", "passkey"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];

export default function CheckInButton() {
  if (!client) {
    return null;
  }
  return (
    <ConnectButton
      client={client}
      chains={[base, baseSepolia, monad, celo, optimism, mainnet]}
      wallets={wallets}
      theme={darkTheme({
        colors: { primaryText: "hsl(240, 6%, 94%)" },
      })}
      connectButton={{ label: "Check In Please!" }}
      connectModal={{
        size: "compact",
        title: "Connect with us...",
        titleIcon: "/og.png",
        showThirdwebBranding: false,
        termsOfServiceUrl: "https://nota.endhonesa.com/profile",
        privacyPolicyUrl: "https://nota.endhonesa.com/profile",
      }}
      detailsButton={{
        connectedAccountAvatarUrl: "/1.21.jpeg",
        connectedAccountName: "Welcome back, Prof. NOTA!",
        displayBalanceToken: {
          [base.id]: "0xa3c0d70358eb07c7b8f879a7bb3a4340ac6c4c8f",
        },
      }}
      detailsModal={{
        connectedAccountAvatarUrl: "/1.21.jpeg",
        connectedAccountName: "Prof. NOTA",
        hideBuyFunds: true,
      }}
      supportedTokens={{
        [base.id]: [
          {
            address: "0xa3c0d70358eb07c7b8f879a7bb3a4340ac6c4c8f",
            name: "ENDHONESA",
            symbol: "ENDHONESA",
            icon: "/og.png",
          },
          {
            address: "0x1111111111166b7FE7bd91427724B487980aFc69",
            name: "Zora",
            symbol: "ZORA",
            icon: "/zora_64.png",
          },
          {
            address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            name: "USDC",
            symbol: "USDC",
            icon: "/centre-usdc_28.png",
          },
        ],
      }}
    />
  );
}
