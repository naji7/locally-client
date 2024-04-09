"use client";
import Image from "next/image";
import Checkbox from "../checkbox/checkbox";
import React, { useState } from "react";
import FillCheckbox from "../checkbox/fillcheckbox";

const RegisterMembership = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: any) => {
    setIsChecked(data.target.checked);
  };

  return (
    <div className="flex flex-col items-start justify-between w-full gap-[1.88rem] ">
      <h3 className=" text-sm font-bold">Membership Types</h3>
      <div className="flex items-center justify-center w-full">
        <div className="relative items-start justify-center w-full">
          <Checkbox
            label="On Time Payment"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="border w-2/3 h-[5rem] rounded-2xl py-5 px-5"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <FillCheckbox
            label="On Time Payment"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="border w-2/3 h-[5rem] rounded-2xl py-5 px-5  border-[#FF4C00] bg-[#FF4C00] bg-opacity-10"
          />
        </div>
      </div>
      <hr className="  w-[814px] " />
      <h3 className=" text-sm font-bold">Amount</h3>
      <div className="flex items-center justify-between w-full">
        <h3 className=" text-sm font-light">Tier</h3>
        <h3 className=" text-sm font-light">0 $</h3>
      </div>
      <div className="flex items-center justify-between w-full">
        <h3 className=" text-sm font-bold">Order Total</h3>
        <h3 className=" text-sm font-bold">0 $</h3>
      </div>
      <hr className="  w-[814px] " />
      <h3 className=" text-sm font-bold">Order Total</h3>

      <div className="flex border rounded-2xl w-[979px] h-[66px] bg-[#3A3E3F] bg-opacity-75 relative gap-32">
        <div className="flex items-center justify-center w-[392px] h-[56px] bg-black  border-0 rounded-2xl  absolute top-1 left-1 gap-3 ">
        <Image
            src={"/assets/images/register/pay.svg"}
            width={24.1}
            height={24.1}
            className=""
            alt="button"
          /> 
        <h3 className="text-center text-sm font-normal text-white">Pay by card</h3>
        </div>

        <div className="flex items-center justify-center w-[392px] h-[56px]  border-0 rounded-2xl  absolute top-1 right-1 gap-3 ">
        <Image
            src={"/assets/images/register/crypto.svg"}
            width={24.1}
            height={24.1}
            className=""
            alt="button"
          /> 
        <h3 className="text-center text-sm font-normal text-white">pay by crypto</h3>
        </div>
     
      </div>
    </div>
  );
};

export default RegisterMembership;
