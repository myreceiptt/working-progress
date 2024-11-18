import {
  Receipt,
  Factory,
  GraduationCap,
  Store,
  Warehouse,
  Skull,
} from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";

const products = [
  {
    icon: <Receipt size={20} />,
    href: "/profile/currencies",
    // href: "#prodserv",
    label: "$HAIL $OiOi $NOTA",
    handle: "The Currencies",
  },
  {
    icon: <Factory size={20} />,
    href: "/profile/breads",
    // href: "#prodserv",
    label: "PabrikRoti.IDN",
    handle: "Breads Factory",
  },
  {
    icon: <GraduationCap size={20} />,
    href: "/profile/nota",
    // href: "#prodserv",
    label: "Prof. NOTA",
    handle: "Professor NOTA",
  },
  {
    icon: <Warehouse size={20} />,
    href: "/profile/endhonesa",
    // href: "#prodserv",
    label: "#ENDHONESA",
    handle: "ENDHONESA.COM",
  },
  {
    icon: <Store size={20} />,
    href: "/profile/skateshop",
    // href: "#prodserv",
    label: "#hailskateboarding",
    handle: "SKATESHOP.ID",
  },
  {
    icon: <Skull size={20} />,
    href: "/profile/dethwish",
    // href: "#prodserv",
    label: "deTHwiSH",
    handle: "/ˈdeTH ˌwiSH/",
  },
];

export default function OurProducts() {
  return (
    <div
      id="prodserv"
      className="grid grid-cols-1 gap-4 md:gap-8 mx-auto md:grid-cols-3"
    >
      {products.map((s) => (
        <Card key={s.label}>
          <Link
            href={s.href}
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
  );
}
