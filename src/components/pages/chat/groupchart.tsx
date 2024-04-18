"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Groupchart() {
  const pathname = usePathname();

  const isActive = (path: any) => {
    return pathname === path;
  };
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-5 gap-4 bg-[#C4CDDF] bg-opacity-15 border rounded-t-2xl w-[771px] py-4 pl-9  ">
        <Link href={"/member"}>
          <li className={`chatlist ${isActive("/") ? "navActive" : ""}`}>
            <div className="text-sm font-semibold">Members</div>
          </li>
        </Link>
        <Link href={"/photo"}>
          <li className={`chatlist ${isActive("/") ? "navActive" : ""}`}>
            <div className="text-sm font-semibold">Photo</div>
          </li>
        </Link>
        <Link href={"/videos"}>
          <li className={`chatlist ${isActive("/") ? "navActive" : ""}`}>
            <div className="text-sm font-semibold">Videos</div>
          </li>
        </Link>
        <Link href={"/docs"}>
          <li className={`chatlist ${isActive("/") ? "navActive" : ""}`}>
            <div className="text-sm font-semibold col-span-2">Docs</div>
          </li>
        </Link>
      </div>
      <div className="grid grid-rows-4 gap-4 border rounded-b-2xl w-[771px] py-8 pl-8  ">
        <div className="flex items-center justify-start w-full gap-4">
          <Image
            src={"/assets/images/chat/profile-1.svg"}
            alt="chat profile"
            width={42}
            height={42}
            className=""
          />
          <h3 className="text-base font-medium ">Farahzad</h3>
        </div>

        <div className="flex items-center justify-start w-full gap-4">
          <Image
            src={"/assets/images/chat/profile-2.svg"}
            alt="chat profile"
            width={42}
            height={42}
            className=""
          />
          <h3 className="text-base font-medium ">Adithya</h3>
        </div>
        <div className="flex items-center justify-start w-full gap-4">
          <Image
            src={"/assets/images/chat/profile-3.svg"}
            alt="chat profile"
            width={42}
            height={42}
            className=""
          />
          <h3 className="text-base font-medium ">Nimsara</h3>
        </div>
        <div className="flex items-center justify-start w-full gap-4">
          <Image
            src={"/assets/images/chat/profile-4.svg"}
            alt="chat profile"
            width={42}
            height={42}
            className=""
          />
          <h3 className="text-base font-medium ">Dilruk</h3>
        </div>
      </div>
    </div>
  );
}

export default Groupchart;
