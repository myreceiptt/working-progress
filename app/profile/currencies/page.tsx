"use client";
import Link from "next/link";
import Image from "next/image";
import AccessButton from "../../components/connect/accessbutton";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";
import CheckInButton from "@/app/components/connect/checkinbutton";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";
import PreviewReceiptButton from "@/app/components/receipts/preview-receipt-button";

export default function TheCurrencies() {
  const account = useActiveAccount();

  return (
    <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
      <div className="grid grid-cols-1 mx-auto">
        <div className="my-4 md:my-8 grid grid-cols-1">
          <AccessButton />
        </div>

        {!account && (
          <Card>
            <article className="relative w-full h-full">
              <div className="flex justify-between gap-2 items-center">
                <Image
                  src="/images/the-currencies-for-prof-nota-inc.jpg"
                  alt="Currencies by Prof. NOTA"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </article>
          </Card>
        )}

        {account && (
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex justify-between gap-2 items-center">
                <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                  <time dateTime={new Date("2021-08-25").toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date("2021-08-25"))}
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
                Only $HAIL, $OiOi, and $NOTA Fungible Tokens are valid for all
                activities. Please read and learn from{" "}
                <Link
                  href="https://docs.endhonesa.com/01-the-project.../how-is-the-journey"
                  target="_blank"
                  className="underline duration-500 hover:text-zinc-300">
                  The Journey
                </Link>{" "}
                if necessary.
              </p>
              <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                <li className="mt-2">
                  Polygon $OiOi fungible tokens.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Max. supply is 47,474,747 $OiOi. No pre-sale, only
                      airdropped or rewarded, and no LP on release.
                    </li>
                    <li className="mt-2 ml-4">
                      Launching information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/polygon-usdoioi-fts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        Polygon $OiOi on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">Status: Deprecated (Obsolete)</li>
                  </ul>
                </li>
                <li className="mt-2">
                  Tezos $HAIL fungible tokens.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Max. supply is 47,000,000,000 $HAIL. Some pre-sale, some
                      airdropped or rewarded, and some LP on release.
                    </li>
                    <li className="mt-2 ml-4">
                      Launching information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/tezos-usdhail-fts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        Tezos $HAIL on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">Status: Deprecated (Obsolete)</li>
                  </ul>
                </li>
                <li className="mt-2">
                  Tezos $OiOi fungible tokens.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Max. supply is 47,474,747 $OiOi. No pre-sale, only
                      airdropped or rewarded, and no LP on release.
                    </li>
                    <li className="mt-2 ml-4">
                      Launching information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/tezos-usdoioi-fts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        Tezos $OiOi on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">Status: Deprecated (Obsolete)</li>
                  </ul>
                </li>
                <li className="mt-2">
                  Tezos $NOTA fungible tokens.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Max. supply is 74,747,474,747 $NOTA. No pre-sale, only
                      airdropped or rewarded, and no LP on release.
                    </li>
                    <li className="mt-2 ml-4">
                      Launching information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/tezos-usdnota-fts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        Tezos $NOTA on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">Status: Deprecated (Obsolete)</li>
                  </ul>
                </li>
                <li className="mt-2">
                  Ethereum L2 $OiOi fungible tokens.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Max. supply is 47,474,747 $OiOi. No pre-sale, only
                      airdropped or rewarded, and no LP on release.
                    </li>
                    <li className="mt-2 ml-4">
                      Launching information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/ethereum-usdoioi-fts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        Ethereum L2 $OiOi on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">Status: Active Mature (LTS)</li>
                  </ul>
                </li>
              </ul>
              <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-12">
                ==== 47 =======
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <Link
                  href="/profile#prodserv"
                  className="hover:underline duration-500 hover:text-zinc-300">
                  <p className="block text-zinc-200 hover:text-zinc-50 text-sm">
                    <span aria-hidden="true">&larr;</span> Back to Profile
                  </p>
                </Link>
              </div>
            </article>
          </Card>
        )}

        <div className="mt-4 md:mt-8 grid grid-cols-1">
          <CheckInButton />
          <div className="mt-4 grid grid-cols-1 gap-2">
            <PreviewReceiptButton receiptId={8} />
            <MintReceiptButton receiptId={8} mintLabel="Mint Receipt (NFT)" />
          </div>
        </div>
      </div>
    </div>
  );
}
