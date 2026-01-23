"use client";

import Link from "next/link";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import ReceiptImage from "../receipts/receipt-image";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";
import ReadReceiptButton from "@/app/components/receipts/read-receipt-button";
import type { getNotaReceiptContract } from "@/lib/receipt-contract";

type OwnedTabProps = {
  tokenIds: bigint[];
  contract: NonNullable<ReturnType<typeof getNotaReceiptContract>>;
};

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
      <div className="mt-2 grid grid-cols-1">
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
  const displayTokenIds = [...tokenIds].reverse();

  if (!address) {
    return (
      <div className="text-sm text-zinc-400">
        Connect wallet to see owned receipts.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 rounded-md p-4 md:p-8 relative w-full h-full mx-auto">
      {displayTokenIds.length ? (
        <>
          {displayTokenIds.map((tokenId) => (
            <TokenRow
              key={tokenId.toString()}
              tokenId={tokenId}
              contract={contract}
              address={address}
            />
          ))}
        </>
      ) : (
        <div className="text-sm text-zinc-400">No receipts created yet.</div>
      )}
    </div>
  );
}
