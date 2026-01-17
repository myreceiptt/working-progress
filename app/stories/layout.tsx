import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.endhonesa.com"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "0101 of Prof. NOTA Inc.", // Title on each page
  },
  description:
    "0101 collection contains our stories from 0101 Universe. These are our origin receipts...", // Description for each page
  // applicationName: "Prof. NOTA's Working Progress",
  authors: [
    { name: "MyReceipt", url: "https://www.endhonesa.com" },
    { name: "Prof. NOTA", url: "https://prompt.endhonesa.com" },
  ],
  // manifest: "/manifest.webmanifest",
  // generator: "Breads Factory",
  // keywords: [
  //   "MyReceipt",
  //   "Prof. NOTA",
  //   "Professor NOTA",
  //   "Web3 Developer",
  //   "Blockchain",
  //   "Decentralized Corporation",
  //   "Fungible Token",
  //   "Non-Fungible Token",
  //   "NFT",
  //   "Professional Educator Speaker",
  // ],
  // referrer: "origin-when-cross-origin",
  // creator: "MyReceipt and Friends",
  // publisher: "Prof. NOTA Inc.",
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  alternates: {
    canonical: "/stories", // Canonical for each page
    // languages: {
    //   //   Only used when billingual page provided
    //   "en-US": "/stories/en-US",
    //   "id-ID": "/stories/id-ID",
    // },
  },
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: "0101 of Prof. NOTA Inc.", // Title on each page
    description:
      "0101 collection contains our stories from 0101 Universe. These are our origin receipts...", // Description on each page
    url: "https://nota.endhonesa.com/loggers", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.endhonesa.com/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "We Are Prof. NOTA Inc.", // Alternate text for image
      },
      {
        url: "https://nota.endhonesa.com/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "We Are Prof. NOTA Inc.", // Alternate text for image
      },
    ],
    videos: [
      {
        url: "https://nota.endhonesa.com/video/images/about-prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "website", // Can be an "article" for the "type"
    // publishedTime: "2024-08-24T00:00:00.000Z", // Only use this for "article"
    // authors: ["MyReceipt", "Prof. NOTA"], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "0101 of Prof. NOTA Inc.", // Title on each page
    description:
      "Hi, X People! 0101 collection contains our stories from 0101 Universe. These are our origin receipts...", // Description on each page
    images: ["https://nota.endhonesa.com/images/about-prof-nota-inc.jpg"], // Must be an absolute URL
  },
  // icons: {
  //   shortcut: "/favicon.ico",
  //   icon: "/icon.png",
  //   apple: "/apple-icon.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-icon.png",
  //   },
  // },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-linear-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      {children}
    </div>
  );
}
