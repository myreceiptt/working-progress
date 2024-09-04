import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org/profile"),
  title: {
    template: "%s | nota.straight-line.org",
    default: "About Prof. NOTA Inc.",
  },
  description: "We were born in the 0101 Universe. We exist in the digital realm of the Internet.",
  openGraph: {
    title: "About Prof. NOTA Inc.",
    description: "We were born in the 0101 Universe. We exist in the digital realm of the Internet.",
    url: "https://nota.straight-line.org/profile",
    siteName: "Prof. NOTA's Working Progress",
    images: [
      {
        url: "/images/prog/0.00.jpg",
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
    title: "About Prof. NOTA Inc.",
    images: "/images/prog/0.00.jpg",
  },
  icons: {
    shortcut: "/favicon.ico",
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
