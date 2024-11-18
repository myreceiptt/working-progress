import {
  Github,
  Mail,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  AtSign,
  PhoneIncoming,
  Send,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/myreceiptt",
    label: "Github",
    handle: "myreceiptt",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:nota@straight-line.org",
    label: "Email",
    handle: "nota@",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/MyReceiptTT",
    label: "Twitter",
    handle: "@MyReceiptTT",
  },
  {
    icon: <Youtube size={20} />,
    href: "https://www.youtube.com/@MyReceipt/",
    label: "YouTube",
    handle: "@MyReceipt",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/myreceiptt",
    label: "Facebook",
    handle: "myreceiptt",
  },
  {
    icon: <Instagram size={20} />,
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

export const metadata: Metadata = {
  metadataBase: new URL("https://nota.straight-line.org"),
  title: {
    template: "%s | Beware of Scams!", // Included on each child page
    default: "Contact Prof. NOTA Inc.", // Title on each page
  },
  description:
    "Track us using official links to our existence in 0101 Universe.", // Description for each page
  // applicationName: "Prof. NOTA's Working Progress",
  authors: [
    { name: "MyReceipt", url: "https://www.straight-line.org" },
    { name: "Prof. NOTA", url: "https://prompt.straight-line.org" },
  ],
  // manifest: "/manifest.webmanifest",
  // generator: "Breads Factory",
  // keywords: [
  //   "MyReceipt",
  //   "Prof. NOTA",
  //   "Professor NOTA",
  //   "Web3 Developer",
  //   "Blockchain",
  //   "Decentralized Corporation",
  //   "Fungible Token",
  //   "Non-Fungible Token",
  //   "NFT",
  //   "Professional Educator Speaker",
  // ],
  // referrer: "origin-when-cross-origin",
  // creator: "MyReceipt and Friends",
  // publisher: "Prof. NOTA Inc.",
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  alternates: {
    canonical: "/contact", // Canonical for each page
    // languages: {
    //   //   Only used when billingual page provided
    //   "en-US": "/contact/en-US",
    //   "id-ID": "/contact/id-ID",
    // },
  },
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: "Contact Prof. NOTA Inc.", // Title on each page
    description:
      "Track us using official links to our existence in 0101 Universe.", // Description on each page
    url: "https://nota.straight-line.org/contact", // URL for each page
    siteName: "Prof. NOTA's Working Progress",
    locale: "en-US",
    images: [
      {
        url: "https://nota.straight-line.org/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: "We Are Prof. NOTA Inc.", // Alternate text for image
      },
      {
        url: "https://nota.straight-line.org/images/about-prof-nota-inc.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "We Are Prof. NOTA Inc.", // Alternate text for image
      },
    ],
    videos: [
      {
        url: "https://nota.straight-line.org/video/images/about-prof-nota-inc.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "website", // Can be an "article" for the "type"
    // publishedTime: "2024-08-24T00:00:00.000Z", // Only use this for "article"
    // authors: ["MyReceipt", "Prof. NOTA"], // Only use this for "article"
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "Contact Prof. NOTA Inc.", // Title on each page
    description:
      "Hi, X People! Track us using official links to our existence in 0101 Universe.", // Description on each page
    images: ["https://nota.straight-line.org/images/about-prof-nota-inc.jpg"], // Must be an absolute URL
  },
  // icons: {
  //   shortcut: "/favicon.ico",
  //   icon: "/icon.png",
  //   apple: "/apple-icon.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-icon.png",
  //   },
  // },
};

export default function OurContact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Track Us
            </h2>
            <p className="mt-4 text-zinc-400">
              Links to our existence in{" "}
              <Link
                href="#"
                className="underline duration-500 hover:text-zinc-300"
              >
                0101 Universe
              </Link>
              .
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid grid-cols-1 gap-4 md:gap-8 mx-auto md:grid-cols-3">
            {socials.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
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
          <div className="w-full h-px bg-zinc-800" />
          {/* <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 "></div> */}
          {/* <div className="hidden w-full h-px md:block bg-zinc-800" /> */}

          {/* <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3"></div> */}
        </div>
        <BottomNavigation />
      </div>
    </div>

    // <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
    //   <Navigation />
    //   <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
    //     <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
    //       {socials.map((s) => (
    //         <Card>
    //           <Link
    //             href={s.href}
    //             target="_blank"
    //             className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
    //           >
    //             <span
    //               className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
    //               aria-hidden="true"
    //             />
    //             <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
    //               {s.icon}
    //             </span>{" "}
    //             <div className="z-10 flex flex-col items-center">
    //               <span className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display">
    //                 {s.handle}
    //               </span>
    //               <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                 {s.label}
    //               </span>
    //             </div>
    //           </Link>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    //   <BottomNavigation />
    // </div>
  );
}
