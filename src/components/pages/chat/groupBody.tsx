import React from "react";
import Image from "next/image";
import ChatTab from "@/components/tabs/chattab/chattab";

function GroupBody() {
  return (
    <div className="flex flex-col items-start justify-start w-full absolute top-28 gap-8">
      <div className="flex items-center justify-start  w-full gap-5 px-5">
        <Image
          src={"/assets/images/chat/global chat.svg"}
          width={52}
          height={52}
          className=" "
          alt="windland global chat icon"
        />
        <div className="flex flex-col items-start justify-start  ">
          <h3 className="text-base font-extrabold">Winlads Global Chat</h3>
          <h3 className="text-xs font-normal">17 member</h3>
        </div>
      </div>
      <div className="flex items-center justify-start w-full px-5  ">
        <ChatTab/>
      </div>
    </div>
  );
}

export default GroupBody;
