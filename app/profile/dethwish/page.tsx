import Link from "next/link";
import { Metadata } from "next";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";

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

export default function OurDethWish() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2022-09-30").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2022-09-30"))}
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
                  /ˈdeTH ˌwiSH/ Series
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Hello everyone, this is our deTH wiSH NFTs collection
                  series...
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-disc">
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/, the first collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Already SOLD OUT in just two weeks after being released.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-1/21.-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    2nd /ˈdeTH ˌwiSH/, the second collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        This second collection currently suspended.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/13.-2nd-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          2nd /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    3rd /ˈdeTH ˌwiSH/, the third collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this third collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/12.-3rd-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          3rd /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    4th /ˈdeTH ˌwiSH/, the fourth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this fourth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/11.-4th-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          4th /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    5th /ˈdeTH ˌwiSH/, the fifth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this fifth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/10.-5th-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          5th /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    6th /ˈdeTH ˌwiSH/, the sixth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this sixth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/09.-6th-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          6th /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ -X-, the seventh collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this seventh collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/08.-deth-wish-x"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ -X- on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ -Y-, the eighth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this eighth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/07.-deth-wish-y"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ -Y- on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ -Z-, the ninth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this ninth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/06.-deth-wish-z"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ -Z- on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ BODY, the tenth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this tenth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/05.-deth-wish-body"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ BODY on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ MIND, the eleventh collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this eleventh collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/04.-deth-wish-mind"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ MIND on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ HEARTH, the twelfth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this twelfth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/03.-deth-wish-hearth"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ HEARTH on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    /ˈdeTH ˌwiSH/ SOUL, the thirteenth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this thirteenth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/02.-deth-wish-soul"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          /ˈdeTH ˌwiSH/ SOUL on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    LAST /ˈdeTH ˌwiSH/, the fourteenth collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this fourteenth collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/01.-last-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          LAST /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    FINAL /ˈdeTH ˌwiSH/, the final collection.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Too early now for this final collection.
                      </li>
                      <li className="mt-2 ml-4">
                        Release information:{" "}
                        <Link
                          href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-2/00.-final-deth-wish"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          FINAL /ˈdeTH ˌwiSH/ on GitBook of The KING's NFTs
                        </Link>
                        .
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
