"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useActiveAccount,
  useActiveWalletChain,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { isAddress } from "viem";
import type { getNotaReceiptContract } from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";
import Status from "@/app/components/admins/Status";
import MintPrice from "@/app/components/admins/MintPrice";
import Signer from "@/app/components/admins/Signer";
import Admins from "@/app/components/admins/Admins";
import Withdraw from "@/app/components/admins/Withdraw";

type AdminTabProps = {
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
  adminAddresses: string[];
};

type ActiveAction =
  | "mintPrice"
  | "signer"
  | "addAdmin"
  | "removeAdmin"
  | "withdraw";

type MintPriceUpdateStatus =
  | "idle"
  | "unavailable"
  | "updating"
  | "awaiting_wallet"
  | "confirming"
  | "error";

type SignerUpdateStatus =
  | "idle"
  | "unavailable"
  | "updating"
  | "awaiting_wallet"
  | "confirming"
  | "error";

type AddAdminUpdateStatus =
  | "idle"
  | "unavailable"
  | "adding"
  | "awaiting_wallet"
  | "confirming"
  | "error";

type RemoveAdminUpdateStatus =
  | "idle"
  | "unavailable"
  | "removing"
  | "awaiting_wallet"
  | "confirming"
  | "error";

type WithdrawUpdateStatus =
  | "idle"
  | "unavailable"
  | "withdrawing"
  | "awaiting_wallet"
  | "confirming"
  | "error";

export default function AdminTab({ contract, adminAddresses }: AdminTabProps) {
  const account = useActiveAccount();
  const walletChain = useActiveWalletChain();
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const address = account?.address;
  const nativeSymbol = walletChain?.nativeCurrency?.symbol ?? "ETH";
  const contractReady = Boolean(contract);

  const { mutateAsync: sendTxAsync, isPending: isSending } =
    useSendTransaction();

  const [activeAction, setActiveAction] = useState<ActiveAction | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [mintPriceStatus, setMintPriceStatus] =
    useState<MintPriceUpdateStatus>("idle");
  const [mintPriceDotCount, setMintPriceDotCount] = useState(1);
  const [signerStatus, setSignerStatus] = useState<SignerUpdateStatus>("idle");
  const [signerDotCount, setSignerDotCount] = useState(1);
  const [addAdminStatus, setAddAdminStatus] =
    useState<AddAdminUpdateStatus>("idle");
  const [addAdminDotCount, setAddAdminDotCount] = useState(1);
  const [removeAdminStatus, setRemoveAdminStatus] =
    useState<RemoveAdminUpdateStatus>("idle");
  const [removeAdminDotCount, setRemoveAdminDotCount] = useState(1);
  const [withdrawStatus, setWithdrawStatus] =
    useState<WithdrawUpdateStatus>("idle");
  const [withdrawDotCount, setWithdrawDotCount] = useState(1);

  const [balanceWei, setBalanceWei] = useState<bigint | null>(null);
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  const [adminToCheck, setAdminToCheck] = useState("");
  const [adminToAdd, setAdminToAdd] = useState("");
  const [adminToRemove, setAdminToRemove] = useState("");

  const { data: mintPrice, refetch: refetchMintPrice } = useReadContract({
    contract,
    method: "mintPrice",
    params: [],
    queryOptions: { enabled: Boolean(contract) },
  });

  const { data: signer, refetch: refetchSigner } = useReadContract({
    contract,
    method: "signer",
    params: [],
    queryOptions: { enabled: Boolean(contract) },
  });

  const { data: isAdminSelf } = useReadContract({
    contract,
    method: "admins",
    params: [address ?? "0x0000000000000000000000000000000000000000"],
    queryOptions: { enabled: Boolean(contract && address) },
  });

  const shouldCheckAdmin = useMemo(
    () => isAddress(adminToCheck),
    [adminToCheck]
  );

  const { data: isAdminChecked } = useReadContract({
    contract,
    method: "admins",
    params: [
      shouldCheckAdmin
        ? (adminToCheck as `0x${string}`)
        : "0x0000000000000000000000000000000000000000",
    ],
    queryOptions: { enabled: Boolean(contract && shouldCheckAdmin) },
  });

  const shouldCheckAdminToAdd = useMemo(
    () => isAddress(adminToAdd),
    [adminToAdd]
  );

  const { data: isAdminAddCandidate, refetch: refetchIsAdminAddCandidate } =
    useReadContract({
      contract,
      method: "admins",
      params: [
        shouldCheckAdminToAdd
          ? (adminToAdd as `0x${string}`)
          : "0x0000000000000000000000000000000000000000",
      ],
      queryOptions: { enabled: Boolean(contract && shouldCheckAdminToAdd) },
    });

  const shouldCheckAdminToRemove = useMemo(
    () => isAddress(adminToRemove),
    [adminToRemove]
  );

  const {
    data: isAdminRemoveCandidate,
    refetch: refetchIsAdminRemoveCandidate,
  } = useReadContract({
    contract,
    method: "admins",
    params: [
      shouldCheckAdminToRemove
        ? (adminToRemove as `0x${string}`)
        : "0x0000000000000000000000000000000000000000",
    ],
    queryOptions: { enabled: Boolean(contract && shouldCheckAdminToRemove) },
  });

  const normalizedConfiguredAdmins = useMemo(
    () =>
      [...adminAddresses]
        .map((value) => value.trim().toLowerCase())
        .filter(Boolean),
    [adminAddresses]
  );

  const fetchBalance = useCallback(async (): Promise<bigint | null> => {
    setIsBalanceLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/receipt-balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chainId }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || "Failed to load balance.");
      }
      const next = BigInt(payload.balanceWei);
      setBalanceWei(next);
      return next;
    } catch (error) {
      setBalanceWei(null);
      setStatus(error instanceof Error ? error.message : "Failed to load.");
      return null;
    } finally {
      setIsBalanceLoading(false);
    }
  }, [chainId]);

  const refreshBalance = useCallback(async () => {
    await fetchBalance();
  }, [fetchBalance]);

  useEffect(() => {
    void refreshBalance();
  }, [refreshBalance]);

  useEffect(() => {
    if (mintPriceStatus !== "confirming") {
      setMintPriceDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setMintPriceDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [mintPriceStatus]);

  useEffect(() => {
    if (signerStatus !== "confirming") {
      setSignerDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setSignerDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [signerStatus]);

  useEffect(() => {
    if (addAdminStatus !== "confirming") {
      setAddAdminDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setAddAdminDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [addAdminStatus]);

  useEffect(() => {
    if (removeAdminStatus !== "confirming") {
      setRemoveAdminDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setRemoveAdminDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [removeAdminStatus]);

  useEffect(() => {
    if (withdrawStatus !== "confirming") {
      setWithdrawDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setWithdrawDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [withdrawStatus]);

  const withAction = useCallback(
    async (
      action: ActiveAction,
      run: () => Promise<void>,
      options?: { suppressStatus?: boolean; propagateError?: boolean }
    ) => {
      if (!options?.suppressStatus) {
        setStatus(null);
      }
      setActiveAction(action);
      try {
        await run();
      } catch (error) {
        if (!options?.suppressStatus) {
          setStatus(error instanceof Error ? error.message : "Failed.");
        }
        if (options?.propagateError) {
          throw error;
        }
      } finally {
        setActiveAction(null);
      }
    },
    []
  );

  const mintPriceSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (mintPriceStatus === "error") {
      return "Failed. Try Again!";
    }
    if (mintPriceStatus === "updating") {
      return "Updating...";
    }
    if (mintPriceStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (mintPriceStatus === "confirming") {
      return ".".repeat(mintPriceDotCount);
    }
    return "Update Mint Price";
  }, [contractReady, mintPriceDotCount, mintPriceStatus]);

  const mintPriceSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      mintPriceStatus === "updating" ||
      mintPriceStatus === "awaiting_wallet" ||
      mintPriceStatus === "confirming"
    ) {
      return true;
    }
    return isSending;
  }, [contractReady, isSending, mintPriceStatus]);

  const signerSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (signerStatus === "error") {
      return "Failed. Try Again!";
    }
    if (signerStatus === "updating") {
      return "Updating...";
    }
    if (signerStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (signerStatus === "confirming") {
      return ".".repeat(signerDotCount);
    }
    return "Update Signer";
  }, [contractReady, signerDotCount, signerStatus]);

  const signerSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      signerStatus === "updating" ||
      signerStatus === "awaiting_wallet" ||
      signerStatus === "confirming"
    ) {
      return true;
    }
    return isSending;
  }, [contractReady, isSending, signerStatus]);

  const addAdminSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (addAdminStatus === "error") {
      return "Failed. Try Again!";
    }
    if (addAdminStatus === "adding") {
      return "Adding...";
    }
    if (addAdminStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (addAdminStatus === "confirming") {
      return ".".repeat(addAdminDotCount);
    }
    return "Add Admin";
  }, [addAdminDotCount, addAdminStatus, contractReady]);

  const addAdminSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      addAdminStatus === "adding" ||
      addAdminStatus === "awaiting_wallet" ||
      addAdminStatus === "confirming"
    ) {
      return true;
    }
    return isSending;
  }, [addAdminStatus, contractReady, isSending]);

  const removeAdminSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (removeAdminStatus === "error") {
      return "Failed. Try Again!";
    }
    if (removeAdminStatus === "removing") {
      return "Removing...";
    }
    if (removeAdminStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (removeAdminStatus === "confirming") {
      return ".".repeat(removeAdminDotCount);
    }
    return "Remove Admin";
  }, [contractReady, removeAdminDotCount, removeAdminStatus]);

  const removeAdminSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      removeAdminStatus === "removing" ||
      removeAdminStatus === "awaiting_wallet" ||
      removeAdminStatus === "confirming"
    ) {
      return true;
    }
    return isSending;
  }, [contractReady, isSending, removeAdminStatus]);

  const withdrawSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (withdrawStatus === "error") {
      return "Failed. Try Again!";
    }
    if (withdrawStatus === "withdrawing") {
      return "Withdrawing...";
    }
    if (withdrawStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (withdrawStatus === "confirming") {
      return ".".repeat(withdrawDotCount);
    }
    return "Withdraw";
  }, [contractReady, withdrawDotCount, withdrawStatus]);

  const withdrawSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      withdrawStatus === "withdrawing" ||
      withdrawStatus === "awaiting_wallet" ||
      withdrawStatus === "confirming"
    ) {
      return true;
    }
    return isSending;
  }, [contractReady, isSending, withdrawStatus]);

  return (
    <div className="grid gap-4 rounded-md p-4 md:p-8">
      <Status
        chainId={chainId}
        address={address}
        isAdminSelf={typeof isAdminSelf === "boolean" ? isAdminSelf : undefined}
        configuredAdmins={normalizedConfiguredAdmins}
      />

      <div className="w-full h-px bg-zinc-800" />

      <MintPrice
        nativeSymbol={nativeSymbol}
        mintPrice={mintPrice}
        submitLabel={mintPriceSubmitLabel}
        submitDisabled={mintPriceSubmitDisabled}
        onStatus={setStatus}
        onSubmit={(nextMintPriceWei) =>
          withAction("mintPrice", async () => {
            if (!contractReady) {
              setMintPriceStatus("unavailable");
              return;
            }
            try {
              setMintPriceStatus("updating");
              await Promise.resolve();
              setMintPriceStatus("awaiting_wallet");

              const transaction = prepareContractCall({
                contract,
                method: "setMintPrice",
                params: [nextMintPriceWei],
              });
              await sendTxAsync(transaction);
              setMintPriceStatus("confirming");

              if (refetchMintPrice) {
                for (let attempt = 0; attempt < 25; attempt += 1) {
                  const result = await refetchMintPrice();
                  const nextValue = result?.data ?? mintPrice;
                  if (typeof nextValue === "bigint" && nextValue === nextMintPriceWei) {
                    break;
                  }
                  await new Promise((resolve) => setTimeout(resolve, 1200));
                }
              }

              setStatus("Mint price updated.");
              setMintPriceStatus("idle");
            } catch (error) {
              setMintPriceStatus("error");
              throw error;
            }
          })
        }
      />

      <div className="w-full h-px bg-zinc-800" />

      <Signer
        signer={typeof signer === "string" ? signer : undefined}
        submitLabel={signerSubmitLabel}
        submitDisabled={signerSubmitDisabled}
        onSubmit={(nextSigner) =>
          withAction(
            "signer",
            async () => {
              if (!contractReady) {
                setSignerStatus("unavailable");
                return;
              }
              try {
                setSignerStatus("updating");
                await Promise.resolve();
                setSignerStatus("awaiting_wallet");

                const transaction = prepareContractCall({
                  contract,
                  method: "setSigner",
                  params: [nextSigner],
                });
                await sendTxAsync(transaction);
                setSignerStatus("confirming");

                if (refetchSigner) {
                  for (let attempt = 0; attempt < 25; attempt += 1) {
                    const result = await refetchSigner();
                    const nextValue = result?.data ?? signer;
                    if (typeof nextValue === "string" && nextValue === nextSigner) {
                      break;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 1200));
                  }
                }

                setSignerStatus("idle");
              } catch (error) {
                setSignerStatus("error");
                throw error;
              }
            },
            { suppressStatus: true, propagateError: true }
          )
        }
      />

      <div className="w-full h-px bg-zinc-800" />

      <Admins
        disabled={isSending}
        adminToCheck={adminToCheck}
        onChangeAdminToCheck={setAdminToCheck}
        shouldCheckAdmin={shouldCheckAdmin}
        isAdminChecked={
          typeof isAdminChecked === "boolean" ? isAdminChecked : undefined
        }
        adminToAdd={adminToAdd}
        onChangeAdminToAdd={setAdminToAdd}
        isAdminAddCandidate={
          typeof isAdminAddCandidate === "boolean"
            ? isAdminAddCandidate
            : undefined
        }
        addSubmitLabel={addAdminSubmitLabel}
        addSubmitDisabled={addAdminSubmitDisabled}
        onAddSubmit={(nextAdmin) =>
          withAction(
            "addAdmin",
            async () => {
              if (!contractReady) {
                setAddAdminStatus("unavailable");
                return;
              }
              try {
                setAddAdminStatus("adding");
                await Promise.resolve();
                setAddAdminStatus("awaiting_wallet");

                const transaction = prepareContractCall({
                  contract,
                  method: "addAdmin",
                  params: [nextAdmin],
                });
                await sendTxAsync(transaction);
                setAddAdminStatus("confirming");

                if (refetchIsAdminAddCandidate) {
                  for (let attempt = 0; attempt < 25; attempt += 1) {
                    const result = await refetchIsAdminAddCandidate();
                    const nextValue = result?.data ?? isAdminAddCandidate;
                    if (typeof nextValue === "boolean" && nextValue) {
                      break;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 1200));
                  }
                }

                setAddAdminStatus("idle");
              } catch (error) {
                setAddAdminStatus("error");
                throw error;
              }
            },
            { suppressStatus: true, propagateError: true }
          )
        }
        adminToRemove={adminToRemove}
        onChangeAdminToRemove={setAdminToRemove}
        isAdminRemoveCandidate={
          typeof isAdminRemoveCandidate === "boolean"
            ? isAdminRemoveCandidate
            : undefined
        }
        removeSubmitLabel={removeAdminSubmitLabel}
        removeSubmitDisabled={removeAdminSubmitDisabled}
        onRemoveSubmit={(nextAdmin) =>
          withAction(
            "removeAdmin",
            async () => {
              if (!contractReady) {
                setRemoveAdminStatus("unavailable");
                return;
              }
              try {
                setRemoveAdminStatus("removing");
                await Promise.resolve();
                setRemoveAdminStatus("awaiting_wallet");

                const transaction = prepareContractCall({
                  contract,
                  method: "removeAdmin",
                  params: [nextAdmin],
                });
                await sendTxAsync(transaction);
                setRemoveAdminStatus("confirming");

                if (refetchIsAdminRemoveCandidate) {
                  for (let attempt = 0; attempt < 25; attempt += 1) {
                    const result = await refetchIsAdminRemoveCandidate();
                    const nextValue = result?.data ?? isAdminRemoveCandidate;
                    if (typeof nextValue === "boolean" && !nextValue) {
                      break;
                    }
                    await new Promise((resolve) => setTimeout(resolve, 1200));
                  }
                }

                setRemoveAdminStatus("idle");
              } catch (error) {
                setRemoveAdminStatus("error");
                throw error;
              }
            },
            { suppressStatus: true, propagateError: true }
          )
        }
      />

      <div className="w-full h-px bg-zinc-800" />

      <Withdraw
        address={address}
        nativeSymbol={nativeSymbol}
        balanceWei={balanceWei}
        isBalanceLoading={isBalanceLoading}
        submitLabel={withdrawSubmitLabel}
        submitDisabled={withdrawSubmitDisabled}
        onRefreshBalance={refreshBalance}
        onSubmit={(to) =>
          withAction(
            "withdraw",
            async () => {
              if (!contractReady) {
                setWithdrawStatus("unavailable");
                return;
              }
              try {
                setWithdrawStatus("withdrawing");
                await Promise.resolve();
                setWithdrawStatus("awaiting_wallet");

                const transaction = prepareContractCall({
                  contract,
                  method: "withdraw",
                  params: [to],
                });
                await sendTxAsync(transaction);
                setWithdrawStatus("confirming");

                for (let attempt = 0; attempt < 25; attempt += 1) {
                  const nextBalance = await fetchBalance();
                  if (typeof nextBalance === "bigint" && nextBalance === BigInt(0)) {
                    break;
                  }
                  await new Promise((resolve) => setTimeout(resolve, 1200));
                }

                setWithdrawStatus("idle");
              } catch (error) {
                setWithdrawStatus("error");
                throw error;
              }
            },
            { suppressStatus: true, propagateError: true }
          )
        }
      />

      {status ? <p className="text-xs text-zinc-400">{status}</p> : null}
    </div>
  );
}
