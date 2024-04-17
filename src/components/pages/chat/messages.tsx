"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AttachPopup from "@/components/popup/attachpopup";

function Messages() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full">
      {/* masseges */}
      <div className="flex flex-col">
        <h3>welcome</h3>
        <h3>welcome</h3>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <hr className="w-full border " />
        <div className="flex items-center justify-between w-11/12 h-16 border gap-80 px-4 ">
          <div className="flex items-center justify-start w-full">
            <Image
              src={"/assets/images/chat/emoji.svg"}
              alt="group chat"
              width={24}
              height={24}
              className=""
            />
            <input
              id="input"
              type="string"
              placeholder="Enter your message here"
              className="w-full p-4"
            />
          </div>

          {/* input field */}


          

          <div className="flex items-center justify-center w-full gap-2">
            <AttachPopup/>

            <Link href="/">
              <button className="flex items-center justify-center bg-[#FF4C00] w-[131px] h-[41px] border rounded-lg ">
                <Image
                  src={"/assets/images/chat/send.svg"}
                  alt="Icon"
                  width={24}
                  height={24}
                  className=""
                />
                <span>Sent</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
