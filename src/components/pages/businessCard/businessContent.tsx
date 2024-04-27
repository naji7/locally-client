import React from "react";
import Image from "next/image";
import BusinessCard from "../../cards/businessCard";
import Link from "next/link";
import Inactive from "@/components/alerts/inactive";

function BusinessContent() {
  return (
    <div className="flex flex-col items-center justify-between w-full py-14  pl-[1.25rem] xl:pl-[16.75rem] pr-[1.25rem]">
      <div className="flex flex-col items-center">
        <BusinessCard />

        <div className="flex flex-col items-center mt-[7.5rem] sm:mt-[6rem] gap-[2.25rem] w-full">
          <div className="max-w-[12.25rem] h-[12.25rem] border-[6px] border-black rounded-[0.1875rem] z-[2]">
            <Image
              src={"/assets/images/businesscard/qr.png"}
              width={500}
              height={500}
              className="   w-full h-full object-contain rounded-[0.1875rem]"
              alt="logo vibrate"
            />
          </div>

          <button className=" border rounded-2xl w-full py-[1.3rem] bg-[#FF4C00] font-medium text-white px-5 max-w-[31rem] capitalize">
            Apply For A Business Card
          </button>
          <Link
            href={"#"}
            className="text-sm font-light text-[#6B6B6B] capitalize"
          >
            How to use the card?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessContent;
