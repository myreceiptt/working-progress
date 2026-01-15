import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.endhonesa.com"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "Prof. NOTA's Working Progress", // Title on each page
  },
  description:
    "Hi, we are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description for each page
  applicationName: "Prof. NOTA's Working Progress",
  authors: [
    { name: "MyReceipt", url: "https://www.endhonesa.com" },
    { name: "Prof. NOTA", url: "https://prompt.endhonesa.com" },
  ],
  manifest: "/manifest.webmanifest",
  generator: "Breads Factory",
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
  referrer: "origin-when-cross-origin",
  creator: "MyReceipt and Friends",
  publisher: "Prof. NOTA Inc.",
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
  alternates: {
    canonical: "/", // Canonical for each page
    // languages: {
    //   // Only used when billingual page provided
    //   "en-US": "/en-US",
    //   "id-ID": "/id-ID",
    // },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Prof. NOTA's Working Progress", // Title on each page
    description:
      "Hi, we are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description on each page
    url: "https://nota.endhonesa.com", // URL for each page
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
        url: "https://nota.endhonesa.com/video/prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "website", // Can be an "article" for the "type"
    // publishedTime: '2024-02-29T00:00:00.000Z', // Only use this for "article"
    // authors: ['Seb', 'Josh'], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "Prof. NOTA's Working Progress", // Title on each page
    description:
      "Hi, X People! We are Prof. NOTA! It's our working progress, it's not our work in progress.", // Description on each page
    images: ["https://nota.endhonesa.com/images/prof-nota-inc.jpg"], // Must be an absolute URL
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
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
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
