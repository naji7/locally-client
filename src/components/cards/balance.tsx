import Image from "next/image";
import React from "react";

type IBalance = {
  name: string;
  url: string;
  amount: number;
};

const Balance: React.FC<IBalance> = ({ name, url, amount }) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center w-full gap-8">
      <div className="flex flex-col items-center lg:items-start justify-center w-full ">
        <h2 className="text-[42px] sm:text-[54px] font-black">$170.35</h2>
        <div className="flex flex-row items-center justify-center lg:justify-start  w-full gap-2 ">
          <h3 className="text-xs sm:text-base font-normal  text-[#6B6B6B]">
            Your Balance
          </h3>
          <h3 className="text-center border bg-gradient-to-br from-yellow-400 via-yellow-300 to-gray-300 rounded-[60px]  text-xs sm:text-sm font-extrabold px-2 py-1  w-[72px] sm:w-[76px] h-[25px] sm:h-[32px] flex items-center justify-center">
            Gold
          </h3>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="flex flex-row items-end justify-between gap-2 ">
            <Image
              src={"/assets/images/settings/earning.svg"}
              width={44}
              height={44}
              className="w-auto h-auto p-2"
              alt="total earnings"
            />
            <h3 className="text-xs sm:text-[20px] font-bold mb-2">$170.35</h3>
          </div>
          <h3 className="text-[#6B6B6B] text-xs sm:text-base font-normal ">
            Total Earnings
          </h3>
        </div>

        <hr className="w-full sm:w-[0.0625rem] bg-black opacity-[0.14] h-[0.1rem] sm:h-[5.625rem] my-[2rem] sm:my-[0rem] mx-0 sm:mx-[3rem]" />

        <div className="flex flex-col items-start justify-start gap-1">
          <div className="flex flex-row items-end justify-between gap-2 ">
            <Image
              src={url}
              width={44}
              height={44}
              className="w-auto h-auto p-2"
              alt="total Affilates"
            />
            <h3 className="text-xs sm:text-[20px] font-bold mb-2">{amount}</h3>
          </div>
          <h3 className="text-[#6B6B6B] text-xs  sm:text-base font-normal">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
