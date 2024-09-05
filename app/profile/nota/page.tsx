import Link from "next/link";
import { Metadata } from "next";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "Professor NOTA Just for You", // Title on each page
  },
  description:
    "Get the best help, support, and advice from Prof. NOTA about this 0101 Universe as long as utilize the Web3 technology.", // Description for each page
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
    url: "https://nota.straight-line.org/profile/nota", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.straight-line.org/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "Prof. NOTA Inc.", // Alternate text for image
      },
      {
        url: "https://nota.straight-line.org/images/prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Prof. NOTA Inc.", // Alternate text for image
      },
    ],
    videos: [
      {
        url: "https://nota.straight-line.org/video/images/prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "article", // Can be an "website" for the "type"
    publishedTime: "2024-08-29T00:00:00.000Z", // Only use this for "article"
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
    images: ["https://nota.straight-line.org/images/prof-nota-inc.jpg"], // Must be an absolute URL
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

export default function ProfessorNOTA() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-08-27").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-27"))}
                    </time>
                  </span>
                  <span className="text-zinc-500 text-xs  flex items-center gap-1">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(11111111111)}
                  </span>
                </div>
                <h1 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  Professor NOTA
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Get the best help, support, and advice from{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/04-the-12th-stage.../professor-nota"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    Prof. NOTA
                  </Link>{" "}
                  about this{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    0101 Universe
                  </Link>{" "}
                  as long as utilize the Web3 technology.
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    Paid board seats, where Prof. NOTA will play, learn, and
                    work together with you on the board.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Flat fee per seat. Only 1 $OiOi, or 999 $HAIL, or 909
                        $NOTA, or 747 $MATIC, or 747 $XTZ, or 0.747 $ETH, and
                        11.1111% of the fee, per seat, goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Create educational materials to be used by tutors or
                    educators like Prof. NOTA.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Flat fee per material. Only 1 $OiOi, or 999 $HAIL, or
                        909 $NOTA, or 747 $MATIC, or 747 $XTZ, or 0.747 $ETH,
                        and 11.1111% of the fee, per material, goes to the
                        treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Paid education speaker, where Prof. NOTA will liven up your
                    M.I.C.E events.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Flat fee per session. Only 1 $OiOi, or 999 $HAIL, or 909
                        $NOTA, or 747 $MATIC, or 747 $XTZ, or 0.747 $ETH, and
                        11.1111% of the fee, per session, goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Solution development and operation for your products and
                    services business.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Min. fee per project only 1 $OiOi, or 999 $HAIL, or 909
                        $NOTA, or 747 $MATIC, or 747 $XTZ, or 0.747 $ETH, and
                        11.1111% of the fee, per project, goes to the treasury.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-12">
                  ==== 47 =======
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <Link
                    href="/profile#prodserv"
                    className="hover:underline duration-500 hover:text-zinc-300"
                  >
                    <p className="block text-zinc-200 hover:text-zinc-50 text-sm">
                      <span aria-hidden="true">&larr;</span> Back to Profile
                    </p>
                  </Link>
                </div>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
