"use client";
import { client } from "../../util/client";
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

export default function Connected() {
  if (!client) {
    return null;
  }
  return (
    <ConnectButton
      client={client}
      chains={[mainnet, optimism, base, baseSepolia, monad, celo]}
      wallets={wallets}
      theme={darkTheme({
        colors: { primaryText: "hsl(240, 6%, 94%)" },
      })}
      connectButton={{ label: "Connect to Access!" }}
      connectModal={{
        size: "compact",
        title: "Connect with us...",
        titleIcon: "https://nota.endhonesa.com/og.png",
        showThirdwebBranding: false,
        termsOfServiceUrl: "https://nota.endhonesa.com/profile",
        privacyPolicyUrl: "https://nota.endhonesa.com/profile",
      }}
      detailsModal={{
        connectedAccountAvatarUrl: "https://nota.endhonesa.com/og.png",
        connectedAccountName: "Prof. NOTA",
        hideBuyFunds: true,
      }}
      // supportedNFTs={{
      //   1: ["0xe75f06bff5f03769748374376443a43ff0d1fd85"], // Prof. NOTA Genesis
      //   // 84532: ["0x..."], // Prof. NOTA's Working Progress
      //   // 84532: ["0x..."], // Prof. NOTA on BASE
      // }}
      supportedTokens={{
        84532: [
          {
            address: "0xa3c0d70358eb07c7b8f879a7bb3a4340ac6c4c8f",
            name: "ENDHONESA Coin",
            symbol: "ENDHONESA",
            icon: "https://nota.endhonesa.com/og.png",
          },
        ],
      }}
    />
  );
}
