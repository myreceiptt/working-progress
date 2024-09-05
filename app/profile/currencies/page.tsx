import Link from "next/link";
import { Metadata } from "next";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org/profile/currencies"),
  title: {
    template: "%s | nota.straight-line.org",
    default: "The Currencies for Prof. NOTA Inc.",
  },
  description:
    "Only $HAIL, $OiOi, and $NOTA Fungible Tokens are valid for all activities.",
  openGraph: {
    title: "The Currencies for Prof. NOTA Inc.",
    description:
      "Only $HAIL, $OiOi, and $NOTA Fungible Tokens are valid for all activities.",
    url: "https://nota.straight-line.org/profile/currencies",
    siteName: "Prof. NOTA Inc.",
    images: [
      {
        url: "../../images/the-currencies-for-prof-nota-inc.jpg",
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
    title: "The Currencies for Prof. NOTA Inc.",
    images: "../../images/the-currencies-for-prof-nota-inc.jpg",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function TheCurrencies() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-08-25").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-25"))}
                    </time>
                  </span>
                  <span className="text-zinc-500 text-xs flex items-center gap-1">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(11111111111)}
                  </span>
                </div>
                <h1 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  The Currencies
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Only{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-1/tezos-usdhail-fts"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    $HAIL
                  </Link>
                  ,{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-1/tezos-usdoioi-fts"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    $OiOi
                  </Link>
                  , and{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/02-the-creations.../waivfves-1/tezos-usdnota-fts"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    $NOTA
                  </Link>{" "}
                  Fungible Tokens are valid for all activities.
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    Polygon $OiOi fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply is 47,474,747 $OiOi. No pre-sale, only
                        airdropped or rewarded, and no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $HAIL fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply is 47,000,000,000 $HAIL. Some pre-sale, some
                        airdropped or rewarded, and some LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $OiOi fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply is 47,474,747 $OiOi. No pre-sale, only
                        airdropped or rewarded, and no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $NOTA fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply is 74,747,474,747 $NOTA. No pre-sale, only
                        airdropped or rewarded, and no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Ethereum L2 $OiOi fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply is 47,474,747 $OiOi. No pre-sale, only
                        airdropped or rewarded, and no LP on release.
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
