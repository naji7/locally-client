import React from "react";
import Image from "next/image";
import Link from "next/link";

function Withdraw() {
  return (
    // <div className="flex flex-row items-center justify-between w-full">
    //   <div className="flex flex-col items-start justify-center w-full">
    //     <h1 className="item-start justify-center  text-[54px] font-black ">
    //       $170.35
    //     </h1>
    //     <div className="flex flex-row items-center justify-center w-full gap-[10px]">
    //       <h4 className="text-base font-normal text-[#6B6B6B]">
    //         Your Balance
    //       </h4>
    //       <h4 className="text-center border bg-gradient-to-br from-yellow-400 via-yellow-300 to-gray-300 rounded-[60px] text-sm font-extrabold px-2 py-1 w-[76px] h-[32px] ">
    //         Gold
    //       </h4>
    //     </div>

    //     <div className="flex flex-row items-center justify-between w-full">
    //       <div className="flex flex-col items-center justify-center w-full gap-[11px]">
    //         <div className="flex flex-row items-center justify-center w-full gap-6">
    //           {/* <Image
    //     src={"/assets/images/settings/MainCar.svg"}
    //     width={44}
    //     height={44}
    //     className="w-full p-2"
    //     alt="mini car"
    //   /> */}
    //           <h3>image</h3>
    //           <h3 className="text-xl font-bold">$170.35</h3>
    //         </div>
    //         <h3 className="item-start justify-center text-base font-normal text-[#6B6B6B] ">
    //           Total Earnings
    //         </h3>
    //       </div>

    //       {/* <Image
    //     src={"/assets/images/settings/line.svg"}
    //     width={1}
    //     height={90}
    //     className="w-full p-2"
    //     alt="mini car"
    //   /> */}

    //       <div className="flex flex-col items-center justify-center w-full gap-[11px]">
    //         <div className="flex flex-row items-center justify-center w-full gap-6">
    //           {/* <Image
    //     src={"/assets/images/settings/MainCar.svg"}
    //     width={44}
    //     height={44}
    //     className="w-full p-2"
    //     alt="mini car"
    //   /> */}
    //           <h3>image</h3>
    //           <h3 className="text-xl font-bold">$170.35</h3>
    //         </div>
    //         <h3 className="item-start justify-center text-base font-normal text-[#6B6B6B] ">
    //           Total Earnings
    //         </h3>
    //       </div>

    //     </div>
    //   </div>

    //   <Image
    //     src={"/assets/images/settings/MainCar.svg"}
    //     width={492}
    //     height={357}
    //     className="w-full p-2"
    //     alt="mini car"
    //   />
    // </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full ">
      <div className="flex flex-col col-span-1 items-center lg:items-start justify-center w-full gap-8">
        <div className="flex flex-col items-center lg:items-start justify-center w-full ">
        <h2 className="text-[42px] sm:text-[54px] font-black">$170.35</h2>
        <div className="flex flex-row items-center justify-center lg:justify-start  w-full gap-2 ">
          <h3 className="text-xs sm:text-base font-normal  text-[#6B6B6B]">
            Your Balance
          </h3>
          <h3 className="  text-center border bg-gradient-to-br from-yellow-400 via-yellow-300 to-gray-300 rounded-[60px]  text-xs sm:text-sm font-extrabold px-2 py-1  w-[72px] sm:w-[76px] h-[25px] sm:h-[32px]">
            Gold
          </h3>
        </div>
        
      </div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex flex-row items-center justify-between gap-2 ">
              <Image
                src={"/assets/images/settings/earning.svg"}
                width={44}
                height={44}
                className="w-full p-2"
                alt="total earnings"
              />
              <h3 className=" text-xs sm:text-[20px] font-bold ">$170.35</h3>
            </div>
            <h3 className="text-[#6B6B6B] text-xs sm:text-base font-normal ">
              Total Earnings
            </h3>
          </div>

          <hr className="w-full sm:w-[0.0625rem] bg-black opacity-[0.14] h-[0.1rem] sm:h-[5.625rem] my-[2rem] sm:my-[0rem] mx-0 sm:mx-[3rem]" />

          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex flex-row items-center justify-between gap-2 ">
              <Image
                src={"/assets/images/settings/affi.svg"}
                width={44}
                height={44}
                className="w-full p-2"
                alt="total Affilates"
              />
              <h3 className="text-xs sm:text-[20px] font-bold ">00</h3>
            </div>
            <h3 className="text-[#6B6B6B] text-xs  sm:text-base font-normal ">
              Total Affiliates
            </h3>
          </div>
        </div>
        <button className="flex items-center justify-center text-xs sm:text-base border text-white bg-[#FF4C00] rounded-[16px] py-[0.9rem] sm:py-[1.3rem] w-full">
          <h3>Withdraw</h3>
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
