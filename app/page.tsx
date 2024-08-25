import Link from "next/link";
import Image from "next/image";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "{ prof. }", href: "/profile" },
  { name: "{ 0101 }", href: "/stories" },
  { name: "{ cont. }", href: "/contact" },
];

const bottomnav = [
  { name: "{ prog. }", href: "/progresses" },
  { name: "{ proj. }", href: "/projects" },
  { name: "{ logs }", href: "/logs" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={747}
      />
      <Image
        src="/favicon.png"
        width={111}
        height={111}
        alt="Hi, We are Prof. NOTA!"
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Prof. NOTA
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {bottomnav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 px-11 md:px-44">
          It's our working progress, it's not our work in progress. If our work
          for{" "}
          <Link
            target="_blank"
            href="https://iqraa.straight-line.org/the-kings"
            className="underline duration-500 hover:text-zinc-300"
          >
            The KING's NFTs
          </Link>{" "}
          project isn’t finished yet, it’s not our working progress but our work
          in progress.
        </h2>
      </div>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <li className="text-sm font-semibold duration-500 text-zinc-500 hover:text-zinc-300">
            Copyleft (ɔ) since 1980 Prof. NOTA Inc.
          </li>
        </ul>
      </nav>
    </div>
  );
}
