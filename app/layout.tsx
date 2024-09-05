import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "Prof. NOTA's Working Progress", // Title on each page
  },

  description:
    "Hi, we are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description for each page

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
    canonical: "/", // Canonical for each page
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },

  openGraph: {
    title: "Prof. NOTA's Working Progress", // Title on each page
    description:
      "Hi, we are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description on each page
    url: "https://nota.straight-line.org", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    images: [
      {
        url: "https://nota.straight-line.org/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
      },
      {
        url: "https://nota.straight-line.org/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Prof. NOTA Inc.",
      },
    ],
    videos: [
      {
        url: "https://nota.straight-line.org/video/prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website", // Can be an "article" for the "type"
    // publishedTime: '2024-02-29T00:00:00.000Z', // Only use this for "article"
    // authors: ['Seb', 'Josh'], // Only use this for "article"
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
    title: "Prof. NOTA's Working Progress", // Title on each page
    description:
      "Hi, X People! We are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description on each page
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    images: ["https://nota.straight-line.org/images/prof-nota-inc.jpg"], // Must be an absolute URL
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
