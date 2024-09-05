import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "About Prof. NOTA Inc.", // Title on each page
  },

  description:
    "We were born in the 0101 Universe. We exist in the digital realm of the Internet.", // Description for each page

  generator: "Breads Factory",
  applicationName: "Prof. NOTA's Working Progress",
  referrer: "origin-when-cross-origin",
  keywords: [
    "MyReceipt",
    "Prof. NOTA",
    "Professor NOTA",
    "Web3 Developer",
    "Blockchain",
    "Decentralized Corporation",
    "Fungible Token",
    "Non-Fungible Token",
    "NFT",
    "Professional Educator Speaker",
  ],
  authors: [
    { name: "Prof. NOTA", url: "https://prompt.straight-line.org" },
    { name: "MyReceipt", url: "https://www.straight-line.org" },
  ],
  creator: "MyReceipt and Friends",
  publisher: "Prof. NOTA Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://nota.straight-line.org"),
  alternates: {
    canonical: "/profile", // Canonical for each page
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },

  openGraph: {
    title: "About Prof. NOTA Inc.", // Title on each page
    description:
      "We were born in the 0101 Universe. We exist in the digital realm of the Internet.", // Description on each page
    url: "https://nota.straight-line.org/profile", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    images: [
      {
        url: "https://nota.straight-line.org/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
      },
      {
        url: "https://nota.straight-line.org/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Prof. NOTA Inc.",
      },
    ],
    videos: [
      {
        url: "https://nota.straight-line.org/video/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "article", // Can be an "website" for the "type"
    publishedTime: '2024-08-24T00:00:00.000Z', // Only use this for "article"
    authors: ['MyReceipt', 'Prof. NOTA'], // Only use this for "article"
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },

  manifest: "/manifest.webmanifest",

  twitter: {
    card: "summary_large_image",
    title: "About Prof. NOTA Inc.", // Title on each page
    description:
      "We were born in the 0101 Universe. We exist in the digital realm of the Internet.", // Description on each page
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    images: ["https://nota.straight-line.org/images/about-prof-nota-inc.jpg"], // Must be an absolute URL
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      {children}
    </div>
  );
}
