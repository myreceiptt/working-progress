"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

type Props = {
  views: number;
};
export const Footer: React.FC<Props> = ({ views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  return (
    <footer
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 bottom-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-t-2 lg:bg-transparent ${
          isIntersecting
            ? "bg-white/10  border-zinc-800 lg:border-transparent"
            : "bg-zinc-900/0 border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <Link
            href="/progresses"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>

          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <Eye className="w-5 h-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views
              )}
            </span>
            <Link target="_blank" href="https://twitter.com/MyReceiptTT">
              <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/myreceiptt">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
