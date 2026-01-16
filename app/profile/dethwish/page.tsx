"use client";
import Link from "next/link";
import Image from "next/image";
import AccessButton from "../../components/connect/accessbutton";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";
import CheckInButton from "@/app/components/connect/checkinbutton";

export default function OurDethWish() {
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
                  src="/images/dethwish-series-by-prof-nota.jpg"
                  alt="/ˈdeTH ˌwiSH/ Series by Prof. NOTA"
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
                Hello everyone, this is our deTH wiSH NFTs collection series...
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-1/21.-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/13.-2nd-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        2nd /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
                      </Link>
                      .
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  3rd /ˈdeTH ˌwiSH/, the third collection.
                  <ul className="list-disc">
                    <li className="mt-2 ml-4">
                      Will be released soon on BASE, but too early now for this
                      third collection. Stay tune and{" "}
                      <Link
                        href="https://base.app/profile/endhonesa.eth?tab=posts"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        follow Prof. NOTA in Base App
                      </Link>
                      .
                    </li>
                    <li className="mt-2 ml-4">
                      Release information:{" "}
                      <Link
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/12.-3rd-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        3rd /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/11.-4th-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        4th /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/10.-5th-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        5th /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/09.-6th-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        6th /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/08.-deth-wish-x"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ -X- on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/07.-deth-wish-y"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ -Y- on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/06.-deth-wish-z"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ -Z- on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/05.-deth-wish-body"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ BODY on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/04.-deth-wish-mind"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ MIND on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/03.-deth-wish-hearth"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ HEARTH on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/02.-deth-wish-soul"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        /ˈdeTH ˌwiSH/ SOUL on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/01.-last-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        LAST /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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
                        href="https://docs.endhonesa.com/02-the-creations.../waivfves-2/00.-final-deth-wish"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300">
                        FINAL /ˈdeTH ˌwiSH/ on GitBook of The KING&apos;s NFTs
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

          {/* Here will be a button to claim the receipt. */}
        </div>
      </div>
    </div>
  );
}
