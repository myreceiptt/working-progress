"use client"
import Link from "next/link";
import Image from "next/image";
import CheckInButton from "./components/connect/checkinbutton";
import MintReceiptButton from "./components/receipts/mint-receipt-button";
import Particles from "./components/particles";

const navigation = [
  { name: "{ prof. }", href: "/profile" },
  { name: "{ 0101 }", href: "/stories" },
  { name: "{ cont. }", href: "/contact" },
];

const bottomnav = [
  { name: "{ prog. }", href: "/progresses" },
  { name: "{ proj. }", href: "/projects" },
  { name: "{ logs }", href: "/loggers" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-linear-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 underline underline-offset-4">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="w-screen h-px block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1111}
        staticity={47}
        ease={11}
      />
      <Image
        src="/og.png"
        priority={true}
        width={111}
        height={111}
        alt="Hi, We are Prof. NOTA!"
      />
      <h1 className="z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl whitespace-nowrap bg-clip-text ">
        Prof. NOTA v11.11
      </h1>
      <div className="w-screen h-px block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {bottomnav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 underline underline-offset-4">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="text-center animate-fade-in">
        <h2 className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
          We were born in the 0101 Universe. We exist in the digital realm of
          the Internet. So, stay alert and beware of scams!
        </h2>
      </div>
      <div className="mt-4 md:mt-8 grid grid-cols-1 animate-fade-in">
        <CheckInButton />
        <div className="mt-4 grid grid-cols-1">
          <MintReceiptButton receiptId={1} mintLabel="Mint Receipt" />
        </div>
      </div>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <li className="text-sm font-semibold duration-500 text-zinc-500 hover:text-zinc-300">
            Copyleft (ɔ) since 1980 Prof. NOTA Inc.
          </li>
        </ul>
      </nav>
      <iframe
        className="hidden absolute top-0 items-center w-full h-1/4 px-4"
        src="https://open.spotify.com/embed/playlist/0DQja3HX6MsLGtDl30DHFW?utm_source=generator&theme=0"
        // width="747"
        // height="474"
        allowFullScreen
        loading="lazy"
        title="High school anthems for the class of 2000s - Playlist by Prof. NOTA"></iframe>
    </div>
  );
}
