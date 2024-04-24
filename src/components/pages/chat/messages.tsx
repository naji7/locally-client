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
      <div className="flex flex-col w-full items-center justify-center absolute top-52 gap-10 px-5">
        <div className=" w-full flex items-center justify-center  ">
          <h3 className=" text-xs font-medium border-0 rounded-[3.9rem] px-6 py-2 bg-[#FF4C00] bg-opacity-10">
            Adithya joined
          </h3>
        </div>
        <div className="flex w-full  items-center justify-end gap-4 ">
          <div className="flex- flex-col items-center justify-center ">
            <h3 className=" text-xs font-medium border-0 rounded-[3.9rem] rounded-br-none px-6 py-2 bg-[#6ED9F7] ">
              Hey !
            </h3>
            <h3 className=" text-xs font-medium   py-2">8:08 PM</h3>
          </div>

          <Image
            src={"/assets/images/chat/mgperson-1.svg"}
            alt="message profiles"
            width={48}
            height={48}
            className=""
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full ">
          <div className="flex w-full  items-center justify-start gap-4 ">
            <div className="flex items-center justify-center ">
              <Image
                src={"/assets/images/chat/mgperson-1.svg"}
                alt="message profiles"
                width={48}
                height={48}
                className=""
              />
              <div className="flex ">
                <h3 className=" text-xs font-medium border-0 rounded-[3.9rem] rounded-br-none text-[#EE9F28] px-6 py-2 bg-[#FFFBED]">
                  This Message Was Deleted
                </h3>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end w-[261px]">
            <h3 className=" text-xs font-medium  py-2 ">8:08 PM</h3>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center  ">
          <h3 className=" text-xs font-medium border-0 rounded-[3.9rem] px-6 py-2 bg-[#FF4C00] bg-opacity-10">
            Adithya left
          </h3>
        </div>

        <div className="flex flex-col items-start justify-start w-full ">
          <div className="flex w-full  items-center justify-start gap-4 ">
            <div className="flex items-center justify-center ">
              <Image
                src={"/assets/images/chat/mgperson-1.svg"}
                alt="message profiles"
                width={48}
                height={48}
                className=""
              />
              <div className="flex flex-col ">
                <div className="flex flex-col border-0 rounded-[3.9rem] rounded-br-none px-6 py-3 bg-[#F5F5F5]">

                <h3 className=" text-xs font-medium ">
                  Hello
                </h3>
                <h3 className=" text-xs font-medium ">
                  How are you ?
                </h3>
                <h3 className=" text-xs font-medium ">
                  Any one Here ?
                </h3>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end w-[186px]">
            <h3 className=" text-xs font-medium  py-2 ">8:08 PM</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 absolute -bottom-20">
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
            <AttachPopup />

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
