import React from "react";
import Image from "next/image";
import Link from "next/link";

function ChatForm() {
  return (
    <Link href={'/chatinfo'}>
      <div className="flex items-center justify-center w-full  ">
      <div className="flex items-center justify-start border-y w-full h-20 bg-[#C4CDDF] bg-opacity-15 absolute top-0 gap-5 px-5">
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
    </div>
    </Link>
    
  );
}

export default ChatForm;
