import Link from "next/link";
import { Card } from "../../components/card";

export default function TheCurrencies() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative">
        <div className="px-6 lg:px-8 py-6 lg:py-8 space-y-6 lg:space-y-8 mx-auto max-w-2xl">
          <div className="w-full mx-auto lg:mx-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
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
                        Max. supply: 47,474,747 $OiOi
                      </li>
                      <li className="mt-2 ml-4">
                        No pre-sale, airdropped, no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $HAIL fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply: 47,000,000,000 $HAIL
                      </li>
                      <li className="mt-2 ml-4">
                        Some pre-sale, airdropped, some LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $OiOi fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply: 47,474,747 $OiOi
                      </li>
                      <li className="mt-2 ml-4">
                        No pre-sale, airdropped, no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Tezos $NOTA fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply: 74,747,474,747 $NOTA
                      </li>
                      <li className="mt-2 ml-4">
                        No pre-sale, airdropped, no LP on release.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Ethereum L2 $OiOi fungible tokens.
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Max. supply: 47,474,747 $OiOi
                      </li>
                      <li className="mt-2 ml-4">
                        No pre-sale, airdropped, no LP on release.
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
                    className="underline duration-500 hover:text-zinc-300"
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
