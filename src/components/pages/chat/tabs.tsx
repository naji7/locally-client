"use client" 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  label: string;
  href: string;
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex border-0 items-start justify-start w-full bg-[#C4CDDF] bg-opacity-15 py-4 rounded-t-xl">
      {tabs.map((tab, index) => (
        <Link key={index} href={tab.href}>
          <div className={`px-4 py-2 rounded ${isActive(tab.href) ? 'bg-blue-500 text-white' : 'bg- text-black'}`}>
            {tab.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
