"use client";
import { client } from "../../util/client";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "email",
        "passkey",
        "phone",
        "apple",
        "guest",
        "facebook",
        "x",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];

export default function Connected() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: { primaryText: "hsl(240, 6%, 94%)" },
      })}
      connectButton={{ label: "Connect to Access!" }}
      connectModal={{
        size: "compact",
        title: "Connect with us...",
        titleIcon: "https://nota.straight-line.org/og.png",
        showThirdwebBranding: false,
        termsOfServiceUrl: "https://nota.straight-line.org/profile",
        privacyPolicyUrl: "https://nota.straight-line.org/profile",
      }}
    />
  );
}
