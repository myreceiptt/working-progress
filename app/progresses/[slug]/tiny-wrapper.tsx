"use client";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import AccessButton from "@/app/components/connect/accessbutton";
import CheckInButton from "@/app/components/connect/checkinbutton";
import { Card } from "@/app/components/card";

type TinyWrapperProps = {
  children: React.ReactNode;
};

export default function TinyWrapper({ children }: TinyWrapperProps) {
  const account = useActiveAccount();

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8">
      <div className="mt-6 grid grid-cols-1 rounded-lg border border-zinc-600">
        <AccessButton />
      </div>

      {account ? (
        <>{children}</>
      ) : (
        <Card>
          <div className="flex justify-between gap-2 items-center">
            <Image
              src="/images/about-prof-nota-inc.jpg"
              alt="Prof. NOTA Inc."
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Card>
      )}

      <div className="mb-24 grid grid-cols-1 rounded-lg border border-zinc-600">
        <CheckInButton />
      </div>
    </div>
  );
}
