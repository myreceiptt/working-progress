"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import ReceiptImage from "../receipts/receipt-image";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";
import ReadReceiptButton from "@/app/components/receipts/read-receipt-button";
import PreviewReceiptButton from "@/app/components/receipts/preview-receipt-button";
import type { getNotaReceiptContract } from "@/lib/receipt-contract";

const PAGE_SIZE = 4;

type OwnedTabProps = {
  tokenIds: bigint[];
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
};

function OwnedTabContent({
  tokenIds,
  contract,
  address,
}: {
  tokenIds: bigint[];
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
  address: `0x${string}`;
}) {
  const displayTokenIds = useMemo(() => [...tokenIds], [tokenIds]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleTokenIds = displayTokenIds.slice(0, visibleCount);
  const hasMore = visibleCount < displayTokenIds.length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 rounded-md p-4 md:p-8 relative w-full h-full mx-auto">
      {displayTokenIds.length ? (
        <>
          {visibleTokenIds.map((tokenId) => (
            <TokenRow
              key={tokenId.toString()}
              tokenId={tokenId}
              contract={contract}
              address={address}
            />
          ))}
          <div className="col-span-full mt-4 grid justify-items-center gap-2">
            <div className="text-xs text-zinc-500">
              Showing {Math.min(visibleCount, displayTokenIds.length)} of{" "}
              {displayTokenIds.length}
            </div>
            {hasMore ? (
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((current) =>
                    Math.min(current + PAGE_SIZE, displayTokenIds.length)
                  )
                }
                className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400"
              >
                Load {PAGE_SIZE} more
              </button>
            ) : null}
          </div>
        </>
      ) : (
        <div className="text-sm text-zinc-400">No receipts created yet.</div>
      )}
    </div>
  );
}

function TokenRow({
  tokenId,
  contract,
  address,
}: {
  tokenId: bigint;
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
  address: `0x${string}`;
}) {
  const idNumber = Number(tokenId);
  const { data } = useReadContract({
    contract,
    method: "getNOTAMetadata",
    params: [tokenId],
    queryOptions: {
      enabled: Boolean(contract),
    },
  });

  const { data: balance } = useReadContract({
    contract,
    method: "balanceOf",
    params: [address, tokenId],
    queryOptions: {
      enabled: Boolean(contract && address),
    },
  });

  if (!data) {
    return (
      <div className="text-sm text-zinc-400">Loading token #{idNumber}...</div>
    );
  }

  const owned = balance ? balance > BigInt(0) : false;

  return (
    <div className="flex flex-col gap-2">
      <ReceiptImage receiptId={idNumber} />
      <div className="truncate text-center text-sm text-zinc-400">
        ID #{idNumber} - {data.name}
      </div>
      <div className="truncate text-center text-sm text-zinc-400">
        {data.description}
      </div>
      <div className="truncate text-center text-xs text-zinc-500">
        Link to Page:{" "}
        <Link
          href={data.pageUrl}
          target="_blank"
          className="underline transition-colors duration-300 hover:text-zinc-300">
          {data.name} Page.
        </Link>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2">
        <PreviewReceiptButton receiptId={idNumber} />
        {owned ? (
          <MintReceiptButton
            receiptId={idNumber}
            mintedLabel="Receipt Minted"
            mintLabel="Receipt Minted"
          />
        ) : (
          <ReadReceiptButton href={data.pageUrl} />
        )}
      </div>
    </div>
  );
}

export default function OwnedTab({ tokenIds, contract }: OwnedTabProps) {
  const account = useActiveAccount();
  const address = account?.address as `0x${string}` | undefined;
  const tokenIdsKey = useMemo(
    () => tokenIds.map((tokenId) => tokenId.toString()).join(","),
    [tokenIds]
  );

  if (!address) {
    return (
      <div className="text-sm text-zinc-400">
        Connect wallet to see owned receipts.
      </div>
    );
  }

  return (
    <OwnedTabContent
      key={`${address}:${tokenIdsKey}`}
      tokenIds={tokenIds}
      contract={contract}
      address={address}
    />
  );
}
