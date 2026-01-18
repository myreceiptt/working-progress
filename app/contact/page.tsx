"use client";
import {
  Square,
  Castle,
  Receipt,
  X,
  GitBranch,
  Mail,
  MonitorPlay,
  Users,
  UserCheck,
  AtSign,
  PhoneIncoming,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";
import AccessButton from "../components/connect/accessbutton";
import CheckInButton from "../components/connect/checkinbutton";
import MintReceiptButton from "../components/receipts/mint-receipt-button";

const socials = [
  {
    icon: <Square size={20} />,
    href: "https://base.app/profile/endhonesa.eth?tab=posts",
    label: "Base App",
    handle: "endhonesa.eth",
  },
  {
    icon: <Castle size={20} />,
    href: "https://farcaster.xyz/myreceipt.eth",
    label: "Farcaster",
    handle: "myreceipt.eth",
  },
  {
    icon: <Receipt size={20} />,
    href: "https://zora.co/@endhonesa",
    label: "Zora Coin",
    handle: "$endhonesa",
  },
  {
    icon: <GitBranch size={20} />,
    href: "https://github.com/myreceiptt",
    label: "Github",
    handle: "myreceiptt",
  },
  {
    icon: <X size={20} />,
    href: "https://x.com/MyReceiptTT",
    label: "X",
    handle: "@MyReceiptTT",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:nota@endhonesa.com",
    label: "Email",
    handle: "nota@",
  },
  {
    icon: <MonitorPlay size={20} />,
    href: "https://www.youtube.com/@MyReceipt/",
    label: "YouTube",
    handle: "@MyReceipt",
  },
  {
    icon: <Users size={20} />,
    href: "https://www.facebook.com/myreceiptt",
    label: "Facebook",
    handle: "myreceiptt",
  },
  {
    icon: <UserCheck size={20} />,
    href: "https://instagram.com/MyReceipt",
    label: "Instagram",
    handle: "@MyReceipt",
  },
  {
    icon: <AtSign size={20} />,
    href: "https://www.threads.net/@myreceipt",
    label: "Threads",
    handle: "@myreceipt",
  },
  {
    icon: <PhoneIncoming size={20} />,
    href: "https://wa.me/message/DPRNCTJA2Q52L1",
    label: "WhatsApp",
    handle: "+628563160756",
  },
  {
    icon: <Send size={20} />,
    href: "https://t.me/MyReceiptTT",
    label: "Telegram",
    handle: "@MyReceiptTT",
  },
];

export default function OurContact() {
  const account = useActiveAccount();

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-2xl mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Track Us
          </h2>
          <p className="mt-4 text-zinc-400">
            Links to our existence in{" "}
            <Link
              href="#"
              className="underline duration-500 hover:text-zinc-300">
              0101 Universe
            </Link>
            .
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 mx-auto">
          <div className="my-4 md:my-8 grid grid-cols-1">
            <AccessButton />
          </div>

          {!account && (
            <Card>
              <article className="relative w-full h-full">
                <div className="flex justify-between gap-2 items-center">
                  <Image
                    src="/images/about-prof-nota-inc.jpg"
                    alt="Prof. NOTA Inc. Contact"
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
            <div className="relative w-full h-full pt-4 md:pt-8 grid grid-cols-1 gap-4 md:gap-8 mx-auto md:grid-cols-3">
              {socials.map((s) => (
                <Card key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 sm:py-8 md:pt-12 md:pb-16 lg:pb-28 xl:pb-44">
                    <span
                      className="absolute w-px h-2/3 bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent"
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
          )}

          <div className="mt-4 md:mt-8 grid grid-cols-1">
            <CheckInButton />
            <div className="mt-4 grid grid-cols-1">
              <MintReceiptButton receiptId={9} mintLabel="Mint Receipt" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
      <BottomNavigation />
    </div>
  );
}
