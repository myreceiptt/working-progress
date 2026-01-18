"use client";
import Link from "next/link";
import Image from "next/image";
import AccessButton from "../../components/connect/accessbutton";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";
import CheckInButton from "@/app/components/connect/checkinbutton";
import MintReceiptButton from "@/app/components/receipts/mint-receipt-button";

export default function BreadsFactory() {
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
                  src="/images/breads-factory-of-prof-nota-inc.jpg"
                  alt="Breads Factory by Prof. NOTA"
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
                  <time dateTime={new Date("2021-08-26").toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date("2021-08-26"))}
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
                Breads Factory
              </h1>
              <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                <Link
                  href="https://docs.endhonesa.com/04-the-12th-stage.../breads-factory"
                  target="_blank"
                  className="underline duration-500 hover:text-zinc-300">
                  The Breads Factory
                </Link>{" "}
                is a factory that produces Programmed Bread (tokenized assets)
                with a Framework of Playing, Learning, and Working or PLW.
                Here&apos;s what&apos;s trying to be provided and built in:
              </p>
              <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                <li className="mt-2">
                  Token deployer service, on any blockchain with any
                  implementation.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Flat fee per project. Only 999 $HAIL, or 1 $OiOi, or 909
                      $NOTA, or 747 $POL, or 747 $XTZ, or 0.747 $ETH, and
                      11.1111% of the fee, per project, goes to the treasury.
                    </li>
                    <li className="mt-2 ml-4">
                      <Link
                        href="/contact"
                        className="underline duration-500 hover:text-zinc-300">
                        Contact Prof. NOTA
                      </Link>{" "}
                      to talk about this token deployer service with our online
                      and offline firewalls.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  Token dExchange service only between Polygon $OiOi, and
                  Polygon $POL.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Only 0.1111% fee per transaction, and 100% of the fee, per
                      transaction, goes to the treasury.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the service:{" "}
                      <Link
                        href="https://discord.gg/HKaVg4vYMp"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi ExChange (Ganti Mantan ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  Token dExchange service only between Tezos $HAIL, Tezos $OiOi,
                  Tezos $NOTA, and Tezos $XTZ.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Only 0.1111% fee per transaction, and 100% of the fee, per
                      transaction, goes to the treasury.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the service:{" "}
                      <Link
                        href="https://discord.gg/HKaVg4vYMp"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi ExChange (Ganti Mantan ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  Token dExchange service only between Ethereum L2 $OiOi and
                  Ethereum L2 $ETH.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Only 0.1111% fee per transaction, and 100% of the fee, per
                      transaction, goes to the treasury.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the service:{" "}
                      <Link
                        href="https://discord.gg/HKaVg4vYMp"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi ExChange (Ganti Mantan ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  Token dExchange service only between Polygon $OiOi, Tezos
                  $OiOi, and Ethereum L2 $OiOi.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Only 0.1111% fee per transaction, and 100% of the fee, per
                      transaction, goes to the treasury.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the service:{" "}
                      <Link
                        href="https://discord.gg/HKaVg4vYMp"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi ExChange (Ganti Mantan, ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  OiOi decision power facility using Ethereum L2 $OiOi to vote.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Token-gated facility using Ethereum L2 $OiOi, and voting
                      to propose to Prof. NOTA Inc. to share the profits.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the facility:{" "}
                      <Link
                        href="https://discord.gg/rdxKH5w4CW"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi Props to Be-Ex (Jadi Mantan, ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  OiOi decision power facility using Tezos $NOTA to vote.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Token-gated facility using Tezos $NOTA, and voting to
                      determine whether (yes/no), when (monthly/annually), and
                      by who (which NFT holders) the profit share is claimable.
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the facility:{" "}
                      <Link
                        href="https://discord.gg/rdxKH5w4CW"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        NOTA for Vote-Ex (Dukung Mantan, ;P)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  OiOi treasury profits share claim facility, from us, by us,
                  and for us.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Based on OiOi decision power, this facility provide
                      monthly and annually claimable profits share for all
                      holders of{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/00.-final-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        the FINAL /ˈdeTH ˌwiSH/ NFTs
                      </Link>{" "}
                      (staked-locked).
                    </li>
                    <li className="mt-2 ml-4">
                      Here is the URL link to the facility:{" "}
                      <Link
                        href="https://discord.gg/rdxKH5w4CW"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        OiOi Claim-Ex (Gono-Gini Mantan, ;P)
                      </Link>
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
                  className="duration-500 hover:underline hover:text-zinc-300">
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
          <div className="mt-4 grid grid-cols-1">
            <MintReceiptButton receiptId={7} mintLabel="Mint Receipt" />
          </div>
        </div>
      </div>
    </div>
  );
}
