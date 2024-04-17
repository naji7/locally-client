"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Groups() {
  const pathname = usePathname();

  const isActive = (path: any) => {
    return pathname === path;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-between border-y w-full h-20 bg-[#C4CDDF] bg-opacity-15 absolute px-7 py-7 top-0 gap-[0.4rem] ">
        <div className="flex items-center justify-center gap-[1.2rem]">
          <Image
            src={"/assets/images/chat/group.svg"}
            width={38}
            height={38}
            className=" "
            alt="group icon"
          />
          <h3 className="text-xl font-extrabold">Groups</h3>
        </div>
        <Image
          src={"/assets/images/chat/search.svg"}
          width={28}
          height={28}
          className=" "
          alt="group search icon"
        />
      </div>


      {/* chats */}

      <div className="flex flex-col items-start justify-start w-full ">
        <ul className="flex flex-col  w-full  ">
          <Link href={"/"}>
            <div className="flex  items-center justify-start w-full h-[84px] gap-3 px-4 ">
              <Image
                src={"/assets/images/chat/global chat.svg"}
                alt="group chat"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col items-start justify-start  ">
                <h3 className="text-base font-extrabold">
                  Winlads Global Chat
                </h3>
                <h3 className="text-xs font-normal">17 member</h3>
              </div>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  items-center justify-start w-full h-[84px] gap-3 px-4 ">
              <Image
                src={"/assets/images/chat/car.svg"}
                alt="group chat"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col items-start justify-start  ">
                <h3 className="text-base font-extrabold">
                  Winlads Global Chat
                </h3>
                <h3 className="text-xs font-normal">17 member</h3>
              </div>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  items-center justify-start w-full h-[84px] gap-3 px-4 ">
              <Image
                src={"/assets/images/chat/global chat.svg"}
                alt="group chat"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col items-start justify-start  ">
                <h3 className="text-base font-extrabold">
                  Winlads Global Chat
                </h3>
                <h3 className="text-xs font-normal">17 member</h3>
              </div>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  items-center justify-start w-full h-[84px] gap-3 px-4 ">
              <Image
                src={"/assets/images/chat/car.svg"}
                alt="group chat"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col items-start justify-start  ">
                <h3 className="text-base font-extrabold">
                  Winlads Global Chat
                </h3>
                <h3 className="text-xs font-normal">17 member</h3>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Groups;
