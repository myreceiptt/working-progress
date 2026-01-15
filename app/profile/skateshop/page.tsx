"use client";
import Link from "next/link";
import Connected from "../../components/connect/accessbutton";
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
                    <time dateTime={new Date("2024-09-30").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-09-30"))}
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
                  In The Story, skateboarding is a limitless vehicle on the
                  surface of The Melting Land (0101). In Reality, that
                  limitlessness manifests as SKATESHOP in ENDHONESA
                  (SKATESHOP.ID): a production–distribution–retail chain that
                  maintains the bridge between work ↔ body and story ↔ street.
                </p>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Each product item can contain artifacts/utilities recognized
                  by ENDHONESA.COM (SBT claims, content access, or story lines).
                </p>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <Link
                    href="https://docs.endhonesa.com/04-the-12th-stage.../skateshop.id"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300">
                    ALL HAIL SKATEBOARDING!!!!
                  </Link>
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-disc">
                  <li className="mt-2">
                    Main Site:
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        <code>https://skateshop.id</code>
                      </li>
                      <li className="mt-2 ml-4">
                        Explains what SKATESHOP.ID is and how it works, plus a
                        Tenant Directory.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tenant Sites:
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        <code>https://tenant.skateshop.id</code>
                      </li>
                      <li className="mt-2 ml-4">
                        Each tenant has its own catalog, cart, checkout, and
                        dashboard.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    SSO/SA-centric:
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Log in to SKATESHOP.ID using the same account as
                        ENDHONESA.COM (Smart Account; EOA/Email can be linked).
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
