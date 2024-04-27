import React from "react";
import Image from "next/image";

function BusinessCard() {
  return (
    <div className="flex flex-col items-center justify-center  business-gradient max-w-[36.8125rem]  w-full h-full border-0 rounded-3xl relative py-8 sm:py-14 before:w-full before:h-full before:bg-[#d9d9d948] before:absolute before:rotate-[5.158deg] before:-z-[2] before:rounded-3xl">
      <div className="flex items-center justify-between w-full px-9">
        <Image
          src={"/assets/images/businesscard/logo.svg"}
          width={160}
          height={30}
          className=" "
          alt="logo"
        />
        <Image
          src={"/assets/images/businesscard/vibrate.svg"}
          width={18}
          height={30}
          className=" "
          alt="logo vibrate"
        />
      </div>
      <div className="flex items-center sm:items-end flex-col sm:flex-row justify-between w-full px-9 gap-4 sm:gap-9 relative">
        <p className=" align-baseline text-xs font-normal order-2 sm:order-1">
          &quot;Connecting hearts, uplifting lives: Our
          <br /> People-centric giveaways&quot;
        </p>
        <Image
          src={"/assets/images/businesscard/car.svg"}
          width={500}
          height={300}
          className="max-w-[20.125rem] w-full h-auto order-1 sm:order-2"
          alt="logo vibrate"
        />
        <Image
          src={"/assets/images/businesscard/circle line.svg"}
          width={40}
          height={121}
          className="absolute top-[18rem] sm:top-[15.2rem] mx-auto  left-0 right-0 max-w-[2.5rem] w-full h-auto "
          alt="logo vibrate"
        />
      </div>
    </div>
  );
}

export default BusinessCard;
