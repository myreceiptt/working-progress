"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b-2 ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/profile"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; prof. &#125;
            </Link>
            <Link
              href="/stories"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; 0101 &#125;
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; cont. &#125;
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
