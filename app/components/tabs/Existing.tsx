"use client";

import Link from "next/link";
import { useReadContract } from "thirdweb/react";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";
import type { getNotaReceiptContract } from "@/lib/receipt-contract";

type ExistingTabProps = {
  tokenIds: bigint[];
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
};

function TokenRow({
  tokenId,
  contract,
}: {
  tokenId: bigint;
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
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

  if (!data) {
    return (
      <div className="rounded-md border border-zinc-800 p-4 text-sm text-zinc-400">
        Loading token #{idNumber}...
      </div>
    );
  }

  return (
    <div className="rounded-md border border-zinc-800 p-4">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold text-zinc-100">
          ID #{idNumber} - {data.name}
        </div>
        <div className="text-sm text-zinc-400">{data.description}</div>
        <div className="text-xs text-zinc-500">
          <Link
            href={data.pageUrl}
            target="_blank"
            className="underline duration-500 hover:text-zinc-300">
            {data.pageUrl}
          </Link>
        </div>
        <div className="text-xs text-zinc-500">
          <Link
            href={`https://opensea.io/item/base/0xe238ea14365d382dec620dba01a3bbfb91e28a34/${idNumber}`}
            target="_blank"
            className="underline duration-500 hover:text-zinc-300">
            {data.name} NFT on OpenSea.IO
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1">
          <MintReceiptButton
            receiptId={idNumber}
            mintLabel="Mint 1 for Admin"
          />
        </div>
      </div>
    </div>
  );
}

export default function ExistingTab({ tokenIds, contract }: ExistingTabProps) {
  const displayTokenIds = [...tokenIds].reverse();
  return (
    <div className="grid gap-4">
      <h2 className="text-lg font-semibold">Existing Receipts</h2>
      {displayTokenIds.length ? (
        <div className="grid gap-4">
          {displayTokenIds.map((tokenId) => (
            <TokenRow
              key={tokenId.toString()}
              tokenId={tokenId}
              contract={contract}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">No receipts created yet.</p>
      )}
    </div>
  );
}
