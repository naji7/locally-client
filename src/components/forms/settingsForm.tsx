'use client'

import React from "react";
import Withdraw from "../settingsForm/withdraw";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  email:string ;
  agreeTerms: string;
  surname:string;
  phonenumber:string;
  birthday:string;
  address1:string;
  address2:string;
  city:string;
   state:string;
}

function SettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-between w-full gap-8 "
    >
      <div className="flex sm:flex-row flex-col items-center justify-center w-full gap-6 ">
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            First name
          </label>
          <input
            id="fname"
            type="string"

            placeholder="First name"
            {...register("firstName")}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium text-base font-medium outline-none"

          />
        </div>
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            Surname
          </label>
          <input
            id="surname"
            type="string"

            placeholder="Surname"
            {...register("surname")}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium text-base font-medium outline-none"

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

          placeholder="email"
          {...register("email", { required: true })}
          className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium text-base font-medium outline-none"

        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center w-full gap-6">
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            Phone Number
          </label>
          <input
            id="number"
            type="tel"

            placeholder="phone number"
            {...register("phonenumber", { required: true })}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

          />
        </div>
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            Date of Birth
          </label>
          <input
            id="bday"
            type="date"
            {...register("birthday", { required: true })}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-xs md:text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  items-center justify-center w-full gap-6">
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            Address Line 1
          </label>
          <input
            id="address1"
            type="text"
            placeholder="Address Line 1 "
            {...register("address1", { required: true })}

            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

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
            {...register("address2", { required: true })}

            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6">
        <div className="flex flex-col  w-full gap-[5px]">
          <label className="ml-3 text-sm font-normal text-[#6B6B6B] opacity-40">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="City "
            {...register("city", { required: true })}

            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

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
            {...register("state", { required: true })}
            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

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

            className="border rounded-xl w-full py-[16px] px-[24px] text-black placeholder-black text-base font-medium outline-none placeholder:text-xs md:placeholder:text-base placeholder:text-black/40 placeholder:font-medium"

          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 ">
        <div className="flex w-full">
          <input
            type="checkbox"
            id="checkbox"
            {...register("agreeTerms")}
            className="form-checkbox w-3.5 h-3.5  sm:h-5 sm:w-5 text-[#FF4C00]"
          />
          <h3 className="ml-2 text-gray-700 text-xs sm:text-sm font-normal">
            I agree with the{" "}
            <span className="text-[#FF4C00]">Terms of use</span>
          </h3>
        </div>
        <button
          type="submit"
          className="border text-xs rounded-xl bg-[#FF4C00] text-white w-full py-[21px] px-[24px]"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default SettingsForm;
