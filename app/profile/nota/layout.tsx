import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.endhonesa.com"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "Professor NOTA Just for You", // Title on each page
  },
  description:
    "Get the best help, support, and advice from Prof. NOTA about this 0101 Universe as long as utilize the Web3 technology.", // Description for each page
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
    canonical: "/profile/nota", // Canonical for each page
    // languages: {
    //   //   Only used when billingual page provided
    //   "en-US": "/profile/nota/en-US",
    //   "id-ID": "/profile/nota/id-ID",
    // },
  },
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: "Professor NOTA Just for You", // Title on each page
    description:
      "Get the best help, support, and advice from Prof. NOTA about this 0101 Universe as long as utilize the Web3 technology.", // Description on each page
    url: "https://nota.endhonesa.com/profile/nota", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.endhonesa.com/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "Prof. NOTA Inc.", // Alternate text for image
      },
      {
        url: "https://nota.endhonesa.com/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Prof. NOTA Inc.", // Alternate text for image
      },
    ],
    videos: [
      {
        url: "https://nota.endhonesa.com/video/images/prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "article", // Can be an "website" for the "type"
    publishedTime: "2024-08-27T00:00:00.000Z", // Only use this for "article"
    authors: ["MyReceipt", "Prof. NOTA"], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "Professor NOTA Just for You", // Title on each page
    description:
      "Hi, X People! Get the best help, support, and advice from Prof. NOTA about this 0101 Universe as long as utilize the Web3 technology.", // Description on each page
    images: ["https://nota.endhonesa.com/images/prof-nota-inc.jpg"], // Must be an absolute URL
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

export default function ProfessorNOTALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative pb-16">{children}</div>;
}
