import Link from "next/link";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";

export default function ENDHONESAdotCom() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-08-28").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-28"))}
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
                  Trade would always proceed properly and as well as possible
                  according to the resulting revenue and formed value by
                  respective residents of{" "}
                  <Link
                    href="https://iqraa.straight-line.org/the-kings/04-the-12th-stage.../endhonesa.com"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    ENDHONESA
                  </Link>
                  .
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    Physical good stuff online store dApp.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Currencies for transaction using $OiOi, $HAIL, $NOTA,
                        $MATIC, $XTZ, $ETH, $BTC, and FIAT with 11.1111% fee per
                        transaction, and 47.4747% of the fee, per transaction,
                        goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Digital good stuff online store dApp.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Currencies for transaction using $OiOi, $HAIL, $NOTA,
                        $MATIC, $XTZ, $ETH, $BTC, and FIAT with 11.1111% fee per
                        transaction, and 47.4747% of the fee, per transaction,
                        goes to the treasury.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Subdomain provider for any Breads Factory dApp projects.
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
