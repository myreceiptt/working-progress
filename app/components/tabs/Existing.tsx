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
      <div className="text-sm text-zinc-400">Loading token #{idNumber}...</div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-zinc-400">
        ID #{idNumber} - {data.name}
      </div>
      <div className="text-sm text-zinc-400">{data.description}</div>
      <div className="text-xs text-zinc-500">
        Page URL:{" "}
        <Link
          href={data.pageUrl}
          target="_blank"
          className="underline transition-colors duration-300 hover:text-zinc-300">
          {data.name} Page.
        </Link>
      </div>
      <div className="text-xs text-zinc-500">
        OpenSea:{" "}
        <Link
          href={`https://opensea.io/item/base/0xe238ea14365d382dec620dba01a3bbfb91e28a34/${idNumber}`}
          target="_blank"
          className="underline transition-colors duration-300 hover:text-zinc-300">
          {data.name} NFTs.
        </Link>
      </div>
      <div className="mt-2 grid grid-cols-1">
        <MintReceiptButton receiptId={idNumber} mintLabel="Mint 1 for Admin" />
      </div>
    </div>
  );
}

export default function ExistingTab({ tokenIds, contract }: ExistingTabProps) {
  const displayTokenIds = [...tokenIds].reverse();
  return (
    <div className="grid gap-4 rounded-md p-6">
      {displayTokenIds.length ? (
        <>
          {displayTokenIds.map((tokenId) => (
            <TokenRow
              key={tokenId.toString()}
              tokenId={tokenId}
              contract={contract}
            />
          ))}
        </>
      ) : (
        <div className="text-sm text-zinc-400">No receipts created yet.</div>
      )}
    </div>
  );
}
