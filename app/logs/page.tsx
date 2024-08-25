"use client";
import { Navigation } from "../components/nav";
import { BottomNavigation } from "../components/navbott";

export default function OurLogs() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Our Logs
            </h2>
            <p className="mt-4 text-zinc-400">
              Records of some events occurring in our corporation, in our
              system, on each of our products and services management.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            <span
              className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display"
              title="Being Initiated"
            >
              init...
            </span>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            <span
              className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display"
              title="Being Initiated"
            >
              init...
            </span>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            <span
              className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display"
              title="Being Initiated"
            >
              init...
            </span>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
}
