"use client";

import Link from "next/link";

type ReadReceiptButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export default function ReadReceiptButton({
  href,
  label = "Read the Page and Claim",
  className,
}: ReadReceiptButtonProps) {
  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <Link
        href={href}
        target="_blank"
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-center text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400"
      >
        {label}
      </Link>
    </div>
  );
}
