import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
// import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Prof. NOTA's Working Progress",
    template: "%s | wp.straight-line.org",
  },
  description: "It's my working progress, it's not my work in progress.",
  openGraph: {
    title: "Prof. NOTA's Working Progress",
    description:
      "It's my working progress, it's not my work in progress.",
    url: "https://wp.straight-line.org",
    siteName: "Prof. NOTA's Working Progress",
    images: [
      {
        url: "https://prompt.straight-line.org/prof-nota-v.1.20.jpg",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Prof. NOTA's Working Progress",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
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
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
