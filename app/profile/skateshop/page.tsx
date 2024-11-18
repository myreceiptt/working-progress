"use client";
import Link from "next/link";
import Connected from "../../components/connect";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";

export default function SkateShopDotID() {
  const account = useActiveAccount();

  return (
    <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
      <div className="w-full mx-auto lg:mx-0">
        <Card>
          <article className="relative w-full h-full p-4 md:p-8">
            <div className="mt-b md:mb-8 grid grid-cols-1">
              <Connected />
            </div>
            {account && (
              <>
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
                  SKATESHOP in ENDHONESA or SKATESHOP.ID will bring you all the
                  best skateboarding goods from 0101 Universe. So our
                  skateboarding life will be free since we are anonymous. We
                  will be a legion if we do not forgive and we do not forget.{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/04-the-12th-stage.../skateshop.id"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    ALL HAIL SKATEBOARDING!!!!
                  </Link>
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    Online skateboard shop multi-vendor.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Currencies for transaction using $HAIL, $OiOi, $NOTA,
                        $POL, $XTZ, $ETH, $BTC, and FIAT with 7.4747% fee per
                        transaction, and 47.4747% of the fee, per transaction,
                        goes to the treasury.
                      </li>
                      <li className="mt-2 ml-4">
                        Here is the URL link of the dApp:{" "}
                        <Link
                          href="https://shop.skateshop.id/"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          SHOP.SKATESHOP.ID
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Online skateboard shop development and operation.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        In addition to being an online shop, we provide
                        solutions for any skateboard shop in ENDHONESA for the
                        development and operation of their online skateboard
                        shop.
                      </li>
                      <li className="mt-2 ml-4">
                        Min. fee per project only 999 $HAIL, or 1 $OiOi, or 909
                        $NOTA, or 747 $POL, or 747 $XTZ, or 0.747 $ETH, and
                        11.1111% of the fee, per project, goes to the treasury.
                      </li>
                      <li className="mt-2 ml-4">
                        <Link
                          href="/contact"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          Contact Prof. NOTA Inc.
                        </Link>{" "}
                        to talk about this with our online and offline
                        firewalls.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Subdomain provider for any online skateboard shop in
                    ENDHONESA.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        We will provide free subdomains for any online
                        skateboard shop as our support, contribution, and
                        dedication to this skateboarding community.
                      </li>
                      <li className="mt-2 ml-4">
                        <Link
                          href="/contact"
                          className="underline duration-500 hover:text-zinc-300"
                        >
                          Contact Prof. NOTA Inc.
                        </Link>{" "}
                        to talk about this with our online and offline
                        firewalls.
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
              </>
            )}
          </article>
        </Card>
      </div>
    </div>
  );
}
