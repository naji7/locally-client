import React from "react";
import Image from "next/image";
import Link from "next/link";

function ChatForm() {
  return (
    <div className="flex items-center justify-start  bg-[#c4cddf12] border-black/10 px-[2.3rem] h-[5.125rem] gap-x-[1.2rem] border-y w-full flex-shrink-0">
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
  );
}

export default ChatForm;
