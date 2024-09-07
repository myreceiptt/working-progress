import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Image
        src="/og.png"
        priority={true}
        width={111}
        height={111}
        alt="Hi, We are Prof. NOTA!"
      />

      <div className="w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );
}
