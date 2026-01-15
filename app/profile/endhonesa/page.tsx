"use client";
import Link from "next/link";
import Connected from "../../components/connect/accessbutton";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";

export default function ENDHONESAdotCom() {
  const account = useActiveAccount();

  return (
    <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
      <div className="grid grid-cols-1 mx-auto">
        <Card>
          <article className="relative w-full h-full p-4 md:p-8">
            <div className="my-4 md:my-8 grid grid-cols-1">
              <Connected />
            </div>
            {account && (
              <>
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-08-17").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-17"))}
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
                  ENDHONESA.COM
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  One domain, four halls. All woven from The Library as the
                  source of truth that "feeds" the other three halls: The
                  Chronicle, The Works, and The Market. All trade would always
                  proceed properly and as well as possible according to the
                  resulting revenue and formed value by respective residents of{" "}
                  <Link
                    href="https://docs.endhonesa.com/04-the-12th-stage.../endhonesa.com"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300">
                    ENDHONESA
                  </Link>
                  .
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    The Chronicle — State, Government, Government (5W+1H)
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        The canonical portal on ENDHONESA (Network‑State), Prof.
                        NOTA Inc.'s form of government, and Government (47 HFP)
                        — complete with house rules, ethics, and official
                        narratives that always refer to The Library.
                      </li>
                      <li className="mt-2 ml-4">
                        Here is the URL link to the hall:{" "}
                        <Link
                          href="https://endhonesa.com/chronicle/"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300">
                          The Chronicle of ENDHONESA
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    The Works — Services and Protocols (operational economics)
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Hall of services and protocols under Firewall Manager: a
                        fair, scalable and ethical way of working.
                      </li>
                      <li className="mt-2 ml-4">
                        Here is the URL link to the hall:{" "}
                        <Link
                          href="https://endhonesa.com/works/"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300">
                          The Works of ENDHONESA
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    The Market — Goods (physical & digital) + Fixed Services
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Curated trading for physical/digital products (Prof.
                        NOTA brand, sub-brands, partners) and fixed services
                        (e.g. anti-AI jacket, mind cap, seducer t-shirt, 1-hour
                        consultation, standard IP license, Bread Factory
                        package).
                      </li>
                      <li className="mt-2 ml-4">
                        Here is the URL link to the hall:{" "}
                        <Link
                          href="https://endhonesa.com/market/"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300">
                          The Market of ENDHONESA
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    The Library — Archives & Sources (GitHub/GitBook‑sync)
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Markdown Warehouse: The KING’s NFTs Project, SOPs,
                        drafts, educational materials, research, Breads Factory
                        releases, partner working documents, and more. This is
                        the reference center; the other three halls always link
                        back to it.
                      </li>
                      <li className="mt-2 ml-4">
                        Here is the URL link to the hall:{" "}
                        <Link
                          href="https://endhonesa.com/library/"
                          target="_blank"
                          className="underline duration-500 hover:text-zinc-300">
                          The Library of ENDHONESA
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
                    className="hover:underline duration-500 hover:text-zinc-300">
                    <p className="block text-zinc-200 hover:text-zinc-50 text-sm">
                      <span aria-hidden="true">&larr;</span> Back to Profile
                    </p>
                  </Link>
                </div>

                {/* Here will be a button to claim the receipt. */}
              </>
            )}
          </article>
        </Card>
      </div>
    </div>
  );
}
