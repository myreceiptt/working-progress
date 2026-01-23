import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.endhonesa.com"),
  title: {
    template: "%s | NOTA Receipts",
    default: "NOTA Receipt Dashboard",
  },
  description: "Contract dashboard for NOTA content receipt smart contract.",
  authors: [
    { name: "MyReceipt", url: "https://www.endhonesa.com" },
    { name: "Prof. NOTA", url: "https://prompt.endhonesa.com" },
  ],
  alternates: {
    canonical: "/contract",
  },
  openGraph: {
    title: "NOTA Receipt Dashboard",
    description: "Contract dashboard for NOTA content receipt smart contract.",
    url: "https://nota.endhonesa.com/contract",
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.endhonesa.com/og.png",
        width: 1200,
        height: 630,
        alt: "NOTA Receipt Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "NOTA Receipt Dashboard",
    description: "Contract dashboard for NOTA content receipt smart contract.",
    images: ["https://nota.endhonesa.com/og.png"],
  },
};

export default function ContractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-linear-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      {children}
    </div>
  );
}
