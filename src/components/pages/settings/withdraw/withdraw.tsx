import React from "react";
import Image from "next/image";
import Link from "next/link";
import Balance from "@/components/cards/balance";

function Withdraw() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full gap-[2.5rem] lg:gap-[5.5rem]">
      <div className="col-span-1 flex flex-col items-center lg:items-start justify-center gap-8">
        <Balance
          url="/assets/images/cards/balance/affi.svg"
          amount={174.35}
          name="Total Affiliates"
        />
        <button className="flex items-center justify-center text-xs sm:text-base border text-white bg-[#FF4C00] rounded-[16px] py-[0.9rem] sm:py-[1.3rem] w-full">
          Withdraw
        </button>
      </div>
      <div className="col-span-1">
        <Image
          src={"/assets/images/settings/MainCar.svg"}
          width={492}
          height={357}
          className="w-full p-2"
          alt="mini car"
        />
      </div>
    </div>
  );
}

export default Withdraw;
