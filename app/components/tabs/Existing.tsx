"use client";

import Link from "next/link";
import { useReadContract } from "thirdweb/react";
import ReceiptImage from "../receipts/receipt-image";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";
import PreviewReceiptButton from "@/app/components/receipts/preview-receipt-button";
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
        <MintReceiptButton receiptId={idNumber} mintLabel="Mint 1 for Admin" />
      </div>
    </div>
  );
}

export default function ExistingTab({ tokenIds, contract }: ExistingTabProps) {
  const displayTokenIds = [...tokenIds].reverse();
  return (
    // <div className="grid gap-4 rounded-md p-4 md:p-8">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 rounded-md p-4 md:p-8 relative w-full h-full mx-auto">
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
