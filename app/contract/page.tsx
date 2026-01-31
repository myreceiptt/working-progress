"use client";
import {
  useMemo,
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { prepareContractCall } from "thirdweb";
import {
  useActiveAccount,
  useActiveWalletChain,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import AccessButton from "@/app/components/connect/accessbutton";
import CheckInButton from "@/app/components/connect/checkinbutton";
import MintReceiptButton from "../components/receipts/mint-receipt-button";
import PreviewReceiptButton from "../components/receipts/preview-receipt-button";
import ReadAllButton from "../components/receipts/read-all-button";
import { getNotaReceiptContract } from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import MetadataTab from "../components/tabs/Metadata";
import ExistingTab from "../components/tabs/Existing";
import OwnedTab from "../components/tabs/Owned";
import AdminTab from "../components/tabs/Admin";

const adminAddresses = (
  process.env.NEXT_PUBLIC_NOTA_RECEIPT_ADMINS ??
  process.env.NEXT_PUBLIC_RECEIPT_ADMINS ??
  ""
)
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

type FormState = {
  id: string;
  name: string;
  description: string;
  pageUrl: string;
  imageSvg: string;
};
type TabKey = "metadata" | "existing" | "admin" | "owned";
type MetadataSaveStatus =
  | "idle"
  | "unavailable"
  | "saving"
  | "awaiting_wallet"
  | "confirming"
  | "error";

export default function ReceiptAdminPage() {
  const account = useActiveAccount();
  const router = useRouter();
  const searchParams = useSearchParams();
  const walletChain = useActiveWalletChain();
  const { mutateAsync: sendTxAsync, isPending: isLoading } =
    useSendTransaction();
  const [form, setForm] = useState<FormState>({
    id: "",
    name: "",
    description: "",
    pageUrl: "",
    imageSvg: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [metadataSaveStatus, setMetadataSaveStatus] =
    useState<MetadataSaveStatus>("idle");
  const [metadataDotCount, setMetadataDotCount] = useState(1);
  const [selectedTokenId, setSelectedTokenId] = useState<string>("new");
  const chainId = walletChain?.id ?? getNotaReceiptDefaultChainId();
  const contract = useMemo(() => getNotaReceiptContract(chainId), [chainId]);
  const readContract = useMemo(
    () => contract ?? getNotaReceiptContract(getNotaReceiptDefaultChainId()),
    [contract]
  );
  const safeReadContract = readContract!;
  const contractReady = Boolean(contract);
  const address = account?.address;
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const tabParam = searchParams?.get("tab");
  const [activeTab, setActiveTab] = useState<TabKey>(
    tabParam === "existing" || tabParam === "admin" || tabParam === "owned"
      ? tabParam
      : "metadata"
  );

  const { data: isAdmin } = useReadContract({
    contract: safeReadContract,
    method: "admins",
    params: [address ?? "0x0000000000000000000000000000000000000000"],
    queryOptions: {
      enabled: Boolean(address && contractReady && readContract),
    },
  });

  const requiredReceiptIds = useMemo(
    () => Array.from({ length: 82 }, (_, index) => BigInt(index + 1)),
    []
  );
  const requiredReceiptAccounts = useMemo(
    () => requiredReceiptIds.map(() => address ?? zeroAddress),
    [address, requiredReceiptIds, zeroAddress]
  );

  const { data: requiredReceiptBalances } = useReadContract({
    contract: safeReadContract,
    method: "balanceOfBatch",
    params: [requiredReceiptAccounts, requiredReceiptIds],
    queryOptions: {
      enabled: Boolean(address && contractReady && readContract),
    },
  });

  const canMintReceipt84 = useMemo(() => {
    if (!address) {
      return false;
    }
    if (!requiredReceiptBalances?.length) {
      return false;
    }
    return requiredReceiptBalances.every((balance) => {
      if (typeof balance === "bigint") {
        return balance > BigInt(0);
      }
      return BigInt(balance) > BigInt(0);
    });
  }, [address, requiredReceiptBalances]);

  const { data: tokenIds, refetch } = useReadContract({
    contract: safeReadContract,
    method: "getNOTATokenIds",
    params: [],
    queryOptions: {
      enabled: Boolean(contractReady && readContract),
    },
  });

  const sortedTokenIds = useMemo(() => {
    if (!tokenIds?.length) {
      return [] as number[];
    }
    return tokenIds
      .map((tokenId) => Number(tokenId))
      .filter((tokenId) => Number.isFinite(tokenId))
      .sort((a, b) => a - b);
  }, [tokenIds]);

  const nextTokenId = useMemo(() => {
    if (!sortedTokenIds.length) {
      return 1;
    }
    return Math.max(...sortedTokenIds) + 1;
  }, [sortedTokenIds]);

  const selectedTokenIdNumber = useMemo(() => {
    if (selectedTokenId === "new") {
      return nextTokenId;
    }
    const parsed = Number(selectedTokenId);
    return Number.isFinite(parsed) ? parsed : nextTokenId;
  }, [nextTokenId, selectedTokenId]);

  const { data: selectedMeta, refetch: refetchSelectedMeta } = useReadContract({
    contract: safeReadContract,
    method: "getNOTAMetadata",
    params: [BigInt(selectedTokenIdNumber)],
    queryOptions: {
      enabled: Boolean(contractReady && readContract),
    },
  });

  const adminGate = useMemo(() => {
    if (!address) {
      return false;
    }
    const normalized = address.toLowerCase();
    if (adminAddresses.includes(normalized)) {
      return true;
    }
    return Boolean(isAdmin);
  }, [address, isAdmin]);

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    const nextTab = searchParams.get("tab");
    if (
      nextTab === "existing" ||
      nextTab === "admin" ||
      nextTab === "metadata" ||
      nextTab === "owned"
    ) {
      if (!adminGate && nextTab !== "owned") {
        setActiveTab("owned");
        return;
      }
      setActiveTab(nextTab);
    }
  }, [adminGate, searchParams]);

  useEffect(() => {
    if (selectedTokenId === "new") {
      setForm({
        id: nextTokenId.toString(),
        name: "",
        description: "",
        pageUrl: "",
        imageSvg: "",
      });
      return;
    }
    if (selectedMeta) {
      setForm({
        id: selectedTokenIdNumber.toString(),
        name: selectedMeta.name ?? "",
        description: selectedMeta.description ?? "",
        pageUrl: selectedMeta.pageUrl ?? "",
        imageSvg: selectedMeta.imageSvg ?? "",
      });
    }
  }, [nextTokenId, selectedMeta, selectedTokenId, selectedTokenIdNumber]);

  const handleChange =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault();
    if (!contractReady || !contract) {
      setMetadataSaveStatus("unavailable");
      return;
    }

    const id = Number(form.id);
    if (!Number.isFinite(id)) {
      setStatus("Token ID must be a number.");
      setMetadataSaveStatus("error");
      return;
    }

    try {
      setMetadataSaveStatus("saving");
      const transaction = prepareContractCall({
        contract,
        method: "setNOTAMetadata",
        params: [
          BigInt(id),
          form.name,
          form.description,
          form.imageSvg,
          form.pageUrl,
        ],
      });
      setMetadataSaveStatus("awaiting_wallet");
      await sendTxAsync(transaction);
      setMetadataSaveStatus("confirming");

      const expected = {
        name: form.name,
        description: form.description,
        imageSvg: form.imageSvg,
        pageUrl: form.pageUrl,
      };

      for (let attempt = 0; attempt < 25; attempt += 1) {
        const result = await refetchSelectedMeta?.();
        const nextMeta = result?.data ?? selectedMeta;
        if (
          nextMeta &&
          nextMeta.name === expected.name &&
          nextMeta.description === expected.description &&
          nextMeta.imageSvg === expected.imageSvg &&
          nextMeta.pageUrl === expected.pageUrl
        ) {
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      await refetch?.();
      setStatus("Metadata saved.");
      setMetadataSaveStatus("idle");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save.");
      setMetadataSaveStatus("error");
    }
  };

  useEffect(() => {
    if (metadataSaveStatus !== "confirming") {
      setMetadataDotCount(1);
      return;
    }
    const interval = setInterval(() => {
      setMetadataDotCount((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [metadataSaveStatus]);

  const metadataSubmitLabel = useMemo(() => {
    if (!contractReady) {
      return "Unavailable on this chain";
    }
    if (metadataSaveStatus === "error") {
      return "Failed. Try Again!";
    }
    if (metadataSaveStatus === "awaiting_wallet") {
      return "Confirm in wallet...";
    }
    if (metadataSaveStatus === "saving") {
      return "Saving...";
    }
    if (metadataSaveStatus === "confirming") {
      return ".".repeat(metadataDotCount);
    }
    return "Save Metadata";
  }, [contractReady, metadataDotCount, metadataSaveStatus]);

  const metadataSubmitDisabled = useMemo(() => {
    if (!contractReady) {
      return true;
    }
    if (
      metadataSaveStatus === "saving" ||
      metadataSaveStatus === "awaiting_wallet" ||
      metadataSaveStatus === "confirming"
    ) {
      return true;
    }
    return false;
  }, [contractReady, metadataSaveStatus]);

  const setTab = (nextTab: TabKey) => {
    if (!adminGate && nextTab !== "owned") {
      return;
    }
    setActiveTab(nextTab);
    if (!searchParams) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", nextTab);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-2xl mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Receipt Dashboard
          </h2>
          <p className="mt-4 text-zinc-400">
            Manage all the content receipts of this web app.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 mx-auto">
          <div className="mb-4 md:mb-8 grid grid-cols-1">
            <AccessButton />
          </div>

          {!account && (
            <Card>
              <article className="relative w-full h-full">
                <div className="flex justify-between gap-2 items-center">
                  <Image
                    src="/images/about-prof-nota-inc.jpg"
                    alt="NOTA Receipt Admin"
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </article>
            </Card>
          )}

          {account && contractReady && (
            <div className="relative w-full h-full pt-4 md:pt-8 grid grid-cols-1 gap-4 md:gap-8 mx-auto">
              <Card>
                <div className="grid grid-cols-1 gap-6 text-zinc-200">
                  <div className="grid gap-4 rounded-md px-4 md:px-8 pt-4 md:pt-8">
                    <div className="relative inline-grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 rounded-md border border-zinc-800 bg-black/60 p-1">
                      {adminGate && (
                        <>
                          <button
                            className={`relative z-10 flex-1 rounded-md border border-zinc-600 px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                              activeTab === "metadata"
                                ? "bg-zinc-800/80 text-zinc-100"
                                : "text-zinc-400 hover:text-zinc-200"
                            }`}
                            type="button"
                            onClick={() => setTab("metadata")}>
                            Metadata
                          </button>
                          <button
                            className={`relative z-10 flex-1 rounded-md border border-zinc-600 px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                              activeTab === "existing"
                                ? "bg-zinc-800/80 text-zinc-100"
                                : "text-zinc-400 hover:text-zinc-200"
                            }`}
                            type="button"
                            onClick={() => setTab("existing")}>
                            Existing
                          </button>
                          <button
                            className={`relative z-10 flex-1 rounded-md border border-zinc-600 px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                              activeTab === "admin"
                                ? "bg-zinc-800/80 text-zinc-100"
                                : "text-zinc-400 hover:text-zinc-200"
                            }`}
                            type="button"
                            onClick={() => setTab("admin")}>
                            Admin
                          </button>
                        </>
                      )}
                      <button
                        className={`relative z-10 flex-1 rounded-md border border-zinc-600 px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                          activeTab === "owned"
                            ? "bg-zinc-800/80 text-zinc-100"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                        type="button"
                        onClick={() => setTab("owned")}>
                        Owned
                      </button>
                    </div>
                  </div>

                  {adminGate && activeTab === "metadata" ? (
                    <MetadataTab
                      form={form}
                      status={status}
                      submitLabel={metadataSubmitLabel}
                      submitDisabled={metadataSubmitDisabled || isLoading}
                      onSubmit={handleCreate}
                      onChange={handleChange}
                      tokenIds={sortedTokenIds}
                      selectedTokenId={selectedTokenId}
                      onSelectTokenId={setSelectedTokenId}
                      nextTokenId={nextTokenId}
                    />
                  ) : adminGate && activeTab === "existing" ? (
                    <ExistingTab
                      tokenIds={[...(tokenIds ?? [])]}
                      contract={contract!}
                    />
                  ) : adminGate && activeTab === "admin" ? (
                    <AdminTab
                      contract={contract!}
                      adminAddresses={adminAddresses}
                    />
                  ) : (
                    <OwnedTab
                      tokenIds={[...(tokenIds ?? [])]}
                      contract={contract!}
                    />
                  )}
                </div>
              </Card>
            </div>
          )}

          <div className="mt-4 md:mt-8 grid grid-cols-1">
            <CheckInButton />
            <div className="mt-4 grid grid-cols-1 gap-2">
              <PreviewReceiptButton receiptId={84} />
              {canMintReceipt84 ? (
                <MintReceiptButton
                  receiptId={84}
                  mintLabel="Mint Receipt (NFT)"
                />
              ) : (
                <ReadAllButton />
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
      <BottomNavigation />
    </div>
  );
}
