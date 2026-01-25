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
import { getNotaReceiptContract } from "@/lib/receipt-contract";
import { getNotaReceiptDefaultChainId } from "@/lib/nota-receipt-config";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import MetadataTab from "../components/tabs/Metadata";
import ExistingTab from "../components/tabs/Existing";
import OwnedTab from "../components/tabs/Owned";

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
type TabKey = "metadata" | "existing" | "owned";

export default function ReceiptAdminPage() {
  const account = useActiveAccount();
  const router = useRouter();
  const searchParams = useSearchParams();
  const walletChain = useActiveWalletChain();
  const { mutate: sendTx, isPending: isLoading } = useSendTransaction();
  const [form, setForm] = useState<FormState>({
    id: "",
    name: "",
    description: "",
    pageUrl: "",
    imageSvg: "",
  });
  const [status, setStatus] = useState<string | null>(null);
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
  const tabParam = searchParams?.get("tab");
  const [activeTab, setActiveTab] = useState<TabKey>(
    tabParam === "existing" || tabParam === "owned" ? tabParam : "metadata"
  );

  const { data: isAdmin } = useReadContract({
    contract: safeReadContract,
    method: "admins",
    params: [address ?? "0x0000000000000000000000000000000000000000"],
    queryOptions: {
      enabled: Boolean(address && contractReady && readContract),
    },
  });

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

  const { data: selectedMeta } = useReadContract({
    contract: safeReadContract,
    method: "getNOTAMetadata",
    params: [BigInt(selectedTokenIdNumber)],
    queryOptions: {
      enabled: Boolean(
        contractReady && readContract && selectedTokenId !== "new"
      ),
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
      return;
    }
    setStatus(null);

    const id = Number(form.id);
    if (!Number.isFinite(id)) {
      setStatus("Token ID must be a number.");
      return;
    }

    try {
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
      await sendTx(transaction);
      setStatus("Metadata saved.");
      await refetch?.();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to save.");
    }
  };

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
                    <div className="relative inline-flex w-full rounded-full border border-zinc-800 bg-black/60 p-1">
                      {adminGate && (
                        <>
                          <button
                            className={`relative z-10 flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                              activeTab === "metadata"
                                ? "bg-zinc-800/80 text-zinc-100"
                                : "text-zinc-400 hover:text-zinc-200"
                            }`}
                            type="button"
                            onClick={() => setTab("metadata")}>
                            Metadata
                          </button>
                          <button
                            className={`relative z-10 flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
                              activeTab === "existing"
                                ? "bg-zinc-800/80 text-zinc-100"
                                : "text-zinc-400 hover:text-zinc-200"
                            }`}
                            type="button"
                            onClick={() => setTab("existing")}>
                            Existing
                          </button>
                        </>
                      )}
                      <button
                        className={`relative z-10 flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition-colors duration-500 cursor-pointer ${
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
                      isLoading={isLoading}
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
              <PreviewReceiptButton receiptId={83} />
              <MintReceiptButton
                receiptId={83}
                mintLabel="Mint Receipt (NFT)"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
      <BottomNavigation />
    </div>
  );
}
