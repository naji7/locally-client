import React from "react";
import Withdraw from "./withdraw";
import Link from "next/link";
import { useForm } from 'react-hook-form';


function SettingsForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  }
  

  return (
    <div className="flex flex-col items-center  pl-[30px]  xl:pl-[16.75rem] pr-[96px] py-[2rem] w-full">
      <Withdraw />
      <form action="" className="flex flex-col items-center justify-between w-full gap-8"onSubmit={handleSubmit(onSubmit)} >
        <div className="flex flex-row items-center justify-center w-full gap-6">
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              First name
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Sean "
              {...register("firstName")}
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Surname
            </label>
            <input
              id="surname"
              type="text"
              placeholder="Sean "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            Valid Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="sean.thernards@gmail.com "
            {...register("email", { required: true })}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-6">
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              placeholder="+61485951647 "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Date of Birth
            </label>
            <input
              id="bday"
              type="date"
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-6">
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Address Line 1
            </label>
            <input
              id="address1"
              type="text"
              placeholder="Address Line 1 "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Address Line 2
            </label>
            <input
              id="address2"
              type="text"
              placeholder="Address Line 2 "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-6">
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="City "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              State
            </label>
            <input
              id="state"
              type="text"
              placeholder="Address Line 2 "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
          <div className="flex flex-col  w-full gap-[5px]">
            <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
              Postal Code
            </label>
            <input
              id="pcode"
              type="text"
              placeholder="Postal Code "
              className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex w-full">
          <input
            type="checkbox"
            id="checkbox"
            {...register("agreeTerms")}
            className="form-checkbox h-5 w-5 text-[#FF4C00]"
          />
          <h3 className="ml-2 text-gray-700 text-sm font-normal">I agree with the <span className="text-[#FF4C00]">Terms of use</span></h3>
        </div>
        <Link className="w-1/6" href="#">
        <button type="submit" className="border rounded-xl bg-[#FF4C00] text-white w-full py-[21px] px-[24px]">
          Confirm
        </button>
        </Link>
        
      </div>
      </form>
     
      
    </div>
  );
}

export default SettingsForm;
