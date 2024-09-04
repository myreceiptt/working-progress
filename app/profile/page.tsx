"use client";
import {
  Receipt,
  Factory,
  GraduationCap,
  Store,
  Warehouse,
  Skull,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import { Eye } from "lucide-react";

const products = [
  {
    icon: <Receipt size={20} />,
    href: "/profile/currencies",
    // href: "#prodserv",
    label: "$HAIL $OiOi $NOTA",
    handle: "The Currencies",
  },
  {
    icon: <Factory size={20} />,
    href: "/profile/breads",
    // href: "#prodserv",
    label: "PabrikRoti.IDN",
    handle: "Breads Factory",
  },
  {
    icon: <GraduationCap size={20} />,
    href: "/profile/nota",
    // href: "#prodserv",
    label: "Prof. NOTA",
    handle: "Professor NOTA",
  },
  {
    icon: <Warehouse size={20} />,
    href: "/profile/endhonesa",
    // href: "#prodserv",
    label: "#ENDHONESA",
    handle: "ENDHONESA.COM",
  },
  {
    icon: <Store size={20} />,
    href: "/profile/skateshop",
    // href: "#prodserv",
    label: "#hailskateboarding",
    handle: "SKATESHOP.ID",
  },
  {
    icon: <Skull size={20} />,
    href: "/profile/dethwish",
    // href: "#prodserv",
    label: "/ˈdeTH ˌwiSH/",
    handle: "deTH wiSH",
  },
];

export default function OurProfile() {
  return (
    <>
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
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
          <div className="grid grid-cols-1 mx-auto xl:px-44">
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
                  We manage our products and services as best as we can with
                  certain rules that are deployed using code on the blockchain.
                  We hope that what we manage can drive various revenues, and
                  form values so that we can all enjoy the benefits. From us, by
                  us, and for us.
                </p>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Concretely, we pull some of the resulting revenue and formed
                  value into our treasury as the profits. From this treasury,
                  all of us can claim it as the sharing profits, proof that{" "}
                  <Link
                    target="_blank"
                    href="https://iqraa.straight-line.org/the-kings/01-the-project.../how-is-the-journey#id-12th-stage-keep-playing-learning-and-working-47-on-web3-for-the-king-and-so-on"
                    className="underline duration-500 hover:text-zinc-300"
                  >
                    The 12th Stage
                  </Link>{" "}
                  is in its continued execution.
                </p>
                <p className="my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  But, we have many things to do and complete. All require our
                  hard work, smart work, and of course, our energy and time. So,
                  expect us, and please stay alert! Beware of scams! Let's hack
                  them all, ethically!
                </p>
                <Image
                  src={"/images/about-prof-nota-inc.jpg"}
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
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-12">
                  ==== 47 =======
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <Link href="#prodserv">
                    <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                      Products and Services{" "}
                      <span aria-hidden="true">&darr;&darr;</span>
                    </p>
                  </Link>
                </div>
              </article>
            </Card>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div
            id="prodserv"
            className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:gap-16"
          >
            {products.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 sm:py-8 md:pt-12 md:pb-16 lg:pb-28 xl:pb-44"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <BottomNavigation />
      </div>
    </>
  );
}
