import Image from "next/image";
import Link from "next/link";
import React from "react";

const GroupSidebar = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center justify-between w-full bg-[#c4cddf12] border-black/10 px-[2.3rem] h-[5.125rem] gap-[0.4rem] border-y">
        <div className="flex items-center justify-center gap-[1.2rem]">
          <Image
            src={"/assets/images/chat/group.svg"}
            width={100}
            height={100}
            className="max-w-[2.375rem] w-full h-auto"
            alt="group icon"
          />
          <h3 className="text-[1.25rem] font-extrabold mt-1.5">Groups</h3>
        </div>
        <Image
          src={"/assets/images/chat/search.svg"}
          width={100}
          height={100}
          className="max-w-[1.75rem] w-full h-auto"
          alt="group search icon"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <ul className="flex flex-col  w-full gap-[2.5rem] mt-[2.5rem]">
          <div className="flex  items-center justify-start w-full  gap-4 px-6">
            <Image
              src={"/assets/images/chat/global chat.svg"}
              alt="group chat"
              width={200}
              height={200}
              className="max-w-[3.25rem] w-full max-h-[3.25rem] h-full"
            />
            <div className="flex flex-col items-start justify-start gap-[0.15rem]">
              <h3 className="text-base font-extrabold">Winlads Global Chat</h3>
              <h3 className="text-xs font-normal text-black/60">17 member</h3>
            </div>
          </div>

          <div className="flex  items-center justify-start w-full  gap-4 px-6 ">
            <Image
              src={"/assets/images/chat/car.svg"}
              alt="group chat"
              width={52}
              height={52}
              className=""
            />
            <div className="flex flex-col items-start justify-start  ">
              <h3 className="text-base font-extrabold">Winlads Global Chat</h3>
              <h3 className="text-xs font-normal">17 member</h3>
            </div>
          </div>

          <div className="flex  items-center justify-start w-full  gap-4 px-6 ">
            <Image
              src={"/assets/images/chat/global chat.svg"}
              alt="group chat"
              width={52}
              height={52}
              className=""
            />
            <div className="flex flex-col items-start justify-start  ">
              <h3 className="text-base font-extrabold">Winlads Global Chat</h3>
              <h3 className="text-xs font-normal">17 member</h3>
            </div>
          </div>

          <div className="flex  items-center justify-start w-full  gap-4 px-6 ">
            <Image
              src={"/assets/images/chat/car.svg"}
              alt="group chat"
              width={52}
              height={52}
              className=""
            />
            <div className="flex flex-col items-start justify-start  ">
              <h3 className="text-base font-extrabold">Winlads Global Chat</h3>
              <h3 className="text-xs font-normal">17 member</h3>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GroupSidebar;
