import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org"),
  title: {
    template: "%s | nota.straight-line.org",
    default: "Prof. NOTA's Working Progress",
  },
  description: "It's our working progress, it's not our work in progress.",
  openGraph: {
    title: "Prof. NOTA's Working Progress",
    description: "It's our working progress, it's not our work in progress.",
    url: "https://nota.straight-line.org",
    siteName: "Prof. NOTA's Working Progress",
    images: [
      {
        url: "/images/prog/1.20.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. NOTA's Working Progress",
    images: "/images/prog/1.20.jpg",
  },
  icons: {
    shortcut: "/favicon.ico",
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
        <link rel="canonical" href="https://nota.straight-line.org/" />
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
