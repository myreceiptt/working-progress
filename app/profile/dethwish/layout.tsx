import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "/ˈdeTH ˌwiSH/ Series by Prof. NOTA", // Title on each page
  },
  description: "Hello everyone, this is our deTH wiSH series...", // Description for each page
  // applicationName: "Prof. NOTA's Working Progress",
  authors: [
    { name: "MyReceipt", url: "https://www.straight-line.org" },
    { name: "Prof. NOTA", url: "https://prompt.straight-line.org" },
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
    canonical: "/profile/dethwish", // Canonical for each page
    // languages: {
    //   //   Only used when billingual page provided
    //   "en-US": "/profile/dethwish/en-US",
    //   "id-ID": "/profile/dethwish/id-ID",
    // },
  },
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: "/ˈdeTH ˌwiSH/ Series by Prof. NOTA", // Title on each page
    description: "Hello everyone, this is our deTH wiSH series...", // Description on each page
    url: "https://nota.straight-line.org/profile/dethwish", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.straight-line.org/images/dethwish-series-by-prof-nota.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "/ˈdeTH ˌwiSH/ in Vision Trip", // Alternate text for image
      },
      {
        url: "https://nota.straight-line.org/images/dethwish-series-by-prof-nota.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "/ˈdeTH ˌwiSH/ in Vision Trip", // Alternate text for image
      },
    ],
    videos: [
      {
        url: "https://nota.straight-line.org/video/images/dethwish-series-by-prof-nota.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "article", // Can be an "website" for the "type"
    publishedTime: "2024-08-30T00:00:00.000Z", // Only use this for "article"
    authors: ["MyReceipt", "Prof. NOTA"], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "/ˈdeTH ˌwiSH/ Series by Prof. NOTA", // Title on each page
    description: "Hi, X People! This is our deTH wiSH series...", // Description on each page
    images: [
      "https://nota.straight-line.org/images/dethwish-series-by-prof-nota.jpg",
    ], // Must be an absolute URL
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

export default function OurDethWishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative pb-16">{children}</div>;
}
