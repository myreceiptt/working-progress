"use client";
import { useCallback, useState } from "react";
import { showConnect } from "@stacks/connect";
import type { UserData } from "@stacks/auth";
import {
  getStacksAddressFromUserData,
  getStacksNetworkName,
} from "@/lib/stacks-config";
import { getStacksNetwork } from "@/lib/stacks-network";
import { stacksUserSession } from "@/lib/stacks-session";

export type StacksWalletState = {
  status: "disconnected" | "connecting" | "connected";
  address: string | null;
  userData: UserData | null;
  error: string | null;
  networkName: "testnet" | "mainnet";
};

export function useStacksWallet() {
  const networkName = getStacksNetworkName();
  const getSessionState = useCallback((): StacksWalletState => {
    if (!stacksUserSession.isUserSignedIn()) {
      return {
        status: "disconnected",
        address: null,
        userData: null,
        error: null,
        networkName,
      };
    }
    const userData = stacksUserSession.loadUserData();
    return {
      status: "connected",
      address: getStacksAddressFromUserData(userData, networkName),
      userData,
      error: null,
      networkName,
    };
  }, [networkName]);

  const [state, setState] = useState<StacksWalletState>(() =>
    getSessionState(),
  );

  const refresh = useCallback(() => {
    setState(getSessionState());
  }, [getSessionState]);

  const connect = useCallback(() => {
    setState((prev) => ({ ...prev, status: "connecting", error: null }));
    showConnect({
      appDetails: {
        name: "Guess The Hash",
        icon: "/icon.png",
      },
      userSession: stacksUserSession,
      network: getStacksNetwork(),
      onFinish: () => {
        refresh();
      },
      onCancel: () => {
        setState((prev) => ({
          ...prev,
          status: "disconnected",
        }));
      },
    });
  }, [refresh]);

  const disconnect = useCallback(() => {
    stacksUserSession.signUserOut("/");
    setState({
      status: "disconnected",
      address: null,
      userData: null,
      error: null,
      networkName,
    });
  }, [networkName]);

  return {
    ...state,
    connect,
    disconnect,
    refresh,
  };
}
