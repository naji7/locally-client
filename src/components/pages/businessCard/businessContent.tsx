import React from "react";
import Image from "next/image";
import BusinessCard from "../../cards/businessCard";
import HomeEffect from "@/components/effects/homeEffect";

function BusinessContent() {
  return (
    <div className="flex flex-col items-center justify-between w-full py-14  pl-[1.25rem] xl:pl-[16.75rem] pr-[1.25rem]">
      <HomeEffect />
      
      <div className="flex flex-col items-center">
        <BusinessCard />

        <div className="flex flex-col items-center mt-[7.5rem] sm:mt-[6rem] gap-[2.25rem]">
          <Image
            src={"/assets/images/businesscard/qr.svg"}
            width={196}
            height={196}
            className=" max-w-[12.25rem] h-auto "
            alt="logo vibrate"
          />

          <button className=" border rounded-2xl px-20 py-5 bg-[#FF4C00]">
            <h3 className="text-base font-semibold text-white ">
              Apply For A Business Card
            </h3>
          </button>

          <div className="">
            <h3 className="text-sm font-normal text-[#6B6B6B]">
              How to use the card?
            </h3>
          </div>
        </div>
      </div>
    </div>


  );
}

export default BusinessContent;
