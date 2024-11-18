"use client";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import { Eye } from "lucide-react";
import Connected from "../components/connect";
import OurProducts from "../components/products";
import { useActiveAccount } from "thirdweb/react";

export default function OurProfile() {
  const account = useActiveAccount();

  return (
    <>
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Our Profile
            </h2>
            <p className="mt-4 text-zinc-400">
              We were born in the{" "}
              <Link
                href="#"
                className="underline duration-500 hover:text-zinc-300"
              >
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
                    href="https://prompt.straight-line.org/"
                    className="underline duration-500 hover:text-zinc-300"
                  >
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
                    href="https://prompt.straight-line.org/"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    Prof. NOTA
                  </Link>
                  ) and recognized as such in the decentralization of the{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    0101 Universe
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  We were born in the{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300"
                  >
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
                    href="https://iqraa.straight-line.org/the-kings/01-the-project.../how-is-the-journey#id-7th-stage-the-sanctuary-of-the-kings-world-postponed"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    The KING’s World
                  </Link>{" "}
                  to execute{" "}
                  <Link
                    target="_blank"
                    href="https://iqraa.straight-line.org/the-kings/01-the-project.../how-is-the-journey#id-12th-stage-keep-playing-learning-and-working-47-on-web3-for-the-king-and-so-on"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    The 12th Stage
                  </Link>
                  . So, our products and services can be accessed by everyone
                  from both universes,{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    0101 Universe
                  </Link>{" "}
                  and Universe of Reality. You can see the list of our products
                  and services on the next section below.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Our products and services are some of the many artifacts of
                  our progress in both universes,{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    0101 Universe
                  </Link>{" "}
                  and Universe of Reality. We manage our products and services
                  as best as possible, with certain rules deployed using code on
                  the blockchain, as our infinite gratitude. We hope that what
                  we manage can continuously drive various revenues, and form
                  values to be given back to all who have supported and expected
                  us since day one.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Concretely, we pull some of the resulting revenue and formed
                  value into our treasury as the profits. From our treasury, all
                  of us can claim the sharing profits, proof that{" "}
                  <Link
                    target="_blank"
                    href="https://iqraa.straight-line.org/the-kings/01-the-project.../how-is-the-journey#id-12th-stage-keep-playing-learning-and-working-47-on-web3-for-the-king-and-so-on"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    The 12th Stage
                  </Link>{" "}
                  is in its continued execution. Enjoy the benefits from us, by
                  us, and for us.
                </p>
                <p className="my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  But, we have many things to do and complete. All require our
                  hard work, smart work, and of course, our energy and time. So,
                  expect us, and please stay alert! Beware of scams! Let's hack
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
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    Prof. NOTA Inc.
                  </Link>
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  ==== 47 =======
                </p>
              </article>
            </Card>
          </div>
          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div id="prodserv" className="grid grid-cols-1 mx-auto">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  Products and Services
                </h2>
                {/* <div className="mb-4 md:mb-8">
                  <Link href="#prodserv">
                    <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                      Products and Services{" "}
                      <span aria-hidden="true">&darr;&darr;</span>
                    </p>
                  </Link>
                </div> */}
                <div className="mt-4 md:mt-8 grid grid-cols-1">
                  <Connected />
                </div>
              </article>
            </Card>
          </div>

          {account && <OurProducts />}

          <div className="w-full h-px bg-zinc-800" />
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}
