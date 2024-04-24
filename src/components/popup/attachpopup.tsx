import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function AttachPopup() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center w-full gap-2">
        <button onClick={togglePopup}>
          <Image
            src={"/assets/images/chat/attach.svg"}
            alt="profile"
            width={24}
            height={24}
            className=""
          />
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup flex flex-col items-start justify-start absolute bottom-11 -left-32 bg-[#FFFFFF] border-0 p-2 rounded-[1.8rem] w-[282px] h-[200px]">
          <Link href={"/"}>
            <div className="flex items-center justify-center w-full px-[1.37rem] gap-7">
              <Image
                src={"/assets/images/chat/popup/photo.svg"}
                alt="profile"
                width={20}
                height={20}
                className=""
              />
              <div className="flex flex-col items-start justify-start w-full border-b border-[#E5E5F0] py-5">
                <h3 className="text-sm font-normal">Photo or Video</h3>
              </div>
            </div>
          </Link>

          <Link href={'/'}>
          <div className="flex items-center justify-center w-full px-[1.37rem] gap-7">
            <Image
              src={"/assets/images/chat/popup/document.svg"}
              alt="profile"
              width={20}
              height={20}
              className=""
            />
            <div className="flex flex-col items-start justify-start w-full border-b border-[#E5E5F0] py-5">
              <h3 className="text-sm font-normal">Document</h3>
            </div>
          </div>
          </Link>

        <Link href={'/'}>
        <div className="flex items-center justify-center w-full px-[1.37rem] gap-7">
            <Image
              src={"/assets/images/chat/popup/voice.svg"}
              alt="profile"
              width={20}
              height={20}
              className=""
            />
            <div className="flex flex-col items-start justify-start w-full  border-[#E5E5F0] py-5">
              <h3 className="text-sm font-normal">Voice</h3>
            </div>
          </div>
        </Link>
          
        </div>
      )}
    </div>
  );
}

export default AttachPopup;
