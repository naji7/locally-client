"use client";
import FillCheckbox from "@/components/checkbox/fillcheckbox";
import { CheckIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Otp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: any) => {
    setIsChecked(data.target.checked);
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full gap-y-[1.8rem] lg:gap-[1.88rem]">
      <hr className="w-full" />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-y-5">
        <div className="relative items-start justify-center w-full lg:basis-[33%]">
          {/* <FillCheckbox
            label="By checking the box you agree to our 
            Terms of use"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className=" text-sm font-normal "
          /> */}
          <input
            id="agree"
            type="checkbox"
            name="agree"
            className="sr-only z-[1]"
          />
          <label
            htmlFor="agree"
            className=" absolute inset-0 w-full h-full z-[99] cursor-pointer"
          ></label>

          <span className=" absolute flex items-center justify-center border-[1.5px] border-black/10 rounded-[0.25rem] z-[5] transition-colors  agree p-[0.25rem]">
            <CheckIcon className="text-white w-[0.875rem] h-[0.875rem]" />
          </span>
          <span className="ml-8 text-xs font-medium  mt-0.5">
            By checking the box you agree to our Terms of use
          </span>
        </div>
        <button className="py-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%]">
          <h3 className="text-xs font-semibold text-white">Get OTP</h3>
        </button>
      </div>
    </div>
  );
};

export default Otp;
