"use client";
import { Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import AccessButton from "../components/connect/accessbutton";
import OurProducts from "../components/products";
import CheckInButton from "../components/connect/checkinbutton";
import MintReceiptButton from "../components/receipts/mint-receipt-button";
import PreviewReceiptButton from "../components/receipts/preview-receipt-button";

export default function OurProfile() {
  const account = useActiveAccount();

  return (
    <>
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Our Profile
            </h2>
            <p className="mt-4 text-zinc-400">
              We were born in the{" "}
              <Link
                href="#"
                className="underline duration-500 hover:text-zinc-300">
                0101 Universe
              </Link>
              . We exist in the digital realm of the Internet.
            </p>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="grid grid-cols-1 mx-auto">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-zinc-100">
                    <time dateTime={new Date("2024-08-24").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-08-24"))}
                    </time>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(11111111111)}
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  Prof. NOTA Inc.
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Hello everyone, we are{" "}
                  <Link
                    target="_blank"
                    href="https://prompt.endhonesa.com/"
                    className="underline duration-500 hover:text-zinc-300">
                    Prof. NOTA
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  “Inc.” is short for “incorporated”, and it is the abbreviation
                  indicating that we are a corporation, which is a company, or a
                  group of people authorized to act as a single entity (legally
                  is{" "}
                  <Link
                    target="_blank"
                    href="https://prompt.endhonesa.com/"
                    className="underline duration-500 hover:text-zinc-300">
                    Prof. NOTA
                  </Link>
                  ) and recognized as such in the decentralization of the{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    0101 Universe
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We were born in the{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    0101 Universe
                  </Link>
                  . We exist in the digital realm of the Internet where the laws
                  of physics, the laws of mathematics, and the laws of code are
                  enforced one hundred percent of the time. Where we can all
                  know a priori how that enforcement will be executed.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We are continuously incubated in{" "}
                  <Link
                    target="_blank"
                    href="https://docs.endhonesa.com/01-the-project.../how-is-the-journey#id-7th-stage-the-sanctuary-of-the-kings-world-postponed"
                    className="underline duration-500 hover:text-zinc-300">
                    The KING&apos;s World
                  </Link>{" "}
                  to execute{" "}
                  <Link
                    target="_blank"
                    href="https://docs.endhonesa.com/01-the-project.../how-is-the-journey#id-12th-stage-keep-playing-learning-and-working-47-on-web3-for-the-king-and-so-on"
                    className="underline duration-500 hover:text-zinc-300">
                    The 12th Stage
                  </Link>
                  . So, our products and services can be accessed by everyone
                  from both universes,{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    0101 Universe
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    Universe of Reality
                  </Link>
                  . You can see the list of our products and services on the
                  next section below.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Our products and services are some of the many artifacts of
                  our progress in both universes,{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    0101 Universe
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    Universe of Reality
                  </Link>
                  . We manage our products and services as best as possible,
                  with certain rules deployed using code on the blockchain, as
                  our infinite gratitude. We hope that what we manage can
                  continuously drive various revenues, and form values to be
                  given back to all who have supported and expected us since day
                  one.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Concretely, we pull some of the resulting revenue and formed
                  value into our treasury as the profits. From our treasury, all
                  of us can claim the sharing profits, proof that{" "}
                  <Link
                    target="_blank"
                    href="https://docs.endhonesa.com/01-the-project.../how-is-the-journey#id-12th-stage-keep-playing-learning-and-working-47-on-web3-for-the-king-and-so-on"
                    className="underline duration-500 hover:text-zinc-300">
                    The 12th Stage
                  </Link>{" "}
                  is in its continued execution. Enjoy the benefits from us, by
                  us, and for us.
                </p>
                <p className="my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  But, we have many things to do and complete. All require our
                  hard work, smart work, and of course, our energy and time. So,
                  expect us, and please stay alert! Beware of scams! Let&apos;s hack
                  them all, ethically!
                </p>
                <Image
                  src={"/images/about-prof-nota-inc.jpg"}
                  priority={true}
                  width={2000}
                  height={1333}
                  alt={"Hi, we are Prof. NOTA!"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-lg"
                />
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Warm regards,
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <Link
                    href="/"
                    className="underline duration-500 hover:text-zinc-300">
                    Prof. NOTA v11.11
                  </Link>
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  ==== 47 =======
                </p>
              </article>
            </Card>

            <div className="mt-4 md:mt-8 grid grid-cols-1">
              <CheckInButton />
              <div className="mt-4 grid grid-cols-1 gap-2">
                <PreviewReceiptButton receiptId={2} />
                <MintReceiptButton receiptId={2} mintLabel="Mint Receipt (NFT)" />
              </div>
            </div>
          </div>

          <div id="prodserv" className="w-full h-px bg-zinc-800" />

          <div className="pt-10 md:pt-12 lg:pt-16 max-w-2xl mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-zinc-400">
              Our products are goods and services, or a combination of them.
            </p>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="grid grid-cols-1 mx-auto">
            <AccessButton />

            {account && <OurProducts />}
          </div>

          <div className="w-full h-px bg-zinc-800" />
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}
