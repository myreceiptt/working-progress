"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const BottomNavigation: React.FC = () => {
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
        className={`fixed inset-x-0 bottom-0 z-50 backdrop-blur duration-200 border-t-2 ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>

          <div className="flex justify-between gap-8">
            <Link
              href="/progresses"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; prog. &#125;
            </Link>
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; proj. &#125;
            </Link>
            <Link
              href="/loggers"
              className="duration-200 text-zinc-400 hover:text-zinc-100 underline underline-offset-4 text-sm"
            >
              &#123; logs &#125;
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
