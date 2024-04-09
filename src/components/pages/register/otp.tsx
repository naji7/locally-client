"use client"
import FillCheckbox from "@/components/checkbox/fillcheckbox";
import React, { useState } from "react";

const Otp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: any) => {
    setIsChecked(data.target.checked);
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full gap-[1.88rem]">
      <hr className="w-[1344px]" />

      <div className="flex items-center justify-between w-full">
        <div className="relative items-start justify-center w-full">
          <FillCheckbox
            label="By checking the box you agree to our 
            Terms of use"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className=" text-sm font-normal "
          />
        </div>
        <button className="py-5 px-60 border rounded-2xl bg-[#FF4C00] w-full">
            <h3 className="text-xs font-semibold text-white">Get OTP</h3>
        </button>
      </div>
    </div>
  );
};

export default Otp;
