'use client'

import {
  BarChartIcon,
  DollarSign,
  Settings,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navLinks = [
    {
      id: 1,
      label: "Financial Health",
      href: "/",
      icon: <BarChartIcon className="size-4 " />,
    },
    {
      id: 2,
      label: "My Wallet",
      href: "/wallet",
      icon: <Wallet className="size-4 " />,
    },
    {
      id: 3,
      label: "Investments",
      href: "/investments",
      icon: <TrendingUp className="size-4 " />,
    },
    {
      id: 4,
      label: "Settings",
      href: "/settings",
      icon: <Settings className="size-4 " />,
    },
  ];

  return (
    <aside
      className={`bg-zinc-800 p-6 transition-width duration-300 ease-in-out ${
        isMobile ? "w-20" : "w-64"
      }`}
    >
      <Link href="/" className="mb-8 flex items-center">
        <div className="size-8 rounded-full bg-green-500 mr-2 flex items-center justify-center shrink-0">
          <DollarSign className="size-5 text-white" />
        </div>
        {!isMobile && <h1 className="text-2xl font-bold">CHA-CHING</h1>}
      </Link>
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            passHref
            className={`hover:text-gray-300 ${
              isMobile ? "justify-center" : "justify-start"
            }`}
          >
            <Button
              variant="ghost"
              className={`w-full mb-2 ${isMobile ? "px-2 items-center" : "flex items-start justify-start"}`}
            >
              {link.icon}
              {!isMobile && link.label}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
