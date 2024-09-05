import Link from "next/link";
import { Metadata } from "next";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org"),
  title: {
    template: "%s | nota.straight-line.org",
    default: "Online SKATESHOP in ENDHONESA",
  },
  description:
    "Our skateboarding life will be free since we are anonymous. We will be a legion if we do not forgive and we do not forget.",
  openGraph: {
    title: "Online SKATESHOP in ENDHONESA",
    description:
      "Our skateboarding life will be free since we are anonymous. We will be a legion if we do not forgive and we do not forget.",
    url: "https://nota.straight-line.org",
    siteName: "Prof. NOTA Inc.",
    images: [
      {
        url: "/images/online-skateshop-in-endhonesa.jpg",
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
    title: "Online SKATESHOP in ENDHONESA",
    images: "/images/online-skateshop-in-endhonesa.jpg",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function SkateShopDotID() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-08-29").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-29"))}
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
                  SKATESHOP.ID
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Our skateboarding life will be free since we are anonymous. We
                  will be a legion if we do not forgive and we do not forget.{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/04-the-12th-stage.../skateshop.id"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    All Hail Skateboarding!!!!
                  </Link>
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    Online skateboard shop multi-vendor.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Currencies for transaction using $OiOi, $HAIL, $NOTA,
                        $MATIC, $XTZ, $ETH, $BTC, and FIAT with 7.4747% fee per
                        transaction, and 47.4747% of the fee, per transaction,
                        goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Online skateboard shop development and operation.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Min. fee per project only 1 $OiOi, or 999 $HAIL, or 909
                        $NOTA, or 747 $MATIC, or 747 $XTZ, or 0.747 $ETH, and
                        11.1111% of the fee, per project, goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Subdomain provider for all online skateboard shop in
                    ENDHONESA.
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
