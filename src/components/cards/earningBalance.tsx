import Image from "next/image";
import React from "react";

export default function EarningBalance() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[90%] md:w-[75%] max-h-[4.25rem] min-h-[4.25rem] rounded-b-[0rem] rounded-t-[1rem] px-[2rem] flex items-center justify-between text-white bg-black/[0.68] border-b border-white -mb-[0.2rem]">
        <span className="text-sm md:text-base font-normal capitalize">
          earning balance
        </span>
        <h3 className="text-[1.2rem] md:text-[1.5rem] font-bold capitalize">
          $ 170.86
        </h3>
      </div>
      <div className="px-[1.57rem] py-[1.8rem] w-full border rounded-[1rem] gradient-1 max-h-[10.125rem] h-full relative shadow-card">
        <div className="flex flex-col items-start justify-start gap-1 w-full">
          <div className="flex items-center gap-1">
            <h4 className=" text-xs font-light capitalize">member since</h4>
            <div className=" inline-flex h-[1.625rem] items-center justify-center gap-[0.625rem] shrink-0 px-[0.875rem] rounded-[2.1875rem] bg-[#EE391C] ">
              <span className="text-[0.625rem] text-white font-semibold mt-1">
                15/02/2024
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[3rem] font-extrabold capitalize leading-[4rem]">
              GOLD
            </h2>
            <h5 className="text-[0.6875rem] flex items-center capitalize font-normal">
              Auto Renews On <span>07/03/2024</span>
            </h5>
          </div>
        </div>
        <Image
          src={"/assets/images/home/effect-2.svg"}
          alt="effect"
          className="w-auto h-auto absolute top-0 right-0"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
