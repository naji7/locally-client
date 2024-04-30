"use client";
import Image from "next/image";
import Checkbox from "../../checkbox/checkbox";
import React, { useState } from "react";
import FillCheckbox from "../../checkbox/fillcheckbox";
import { useMembership } from "@/providers/membershipProvider";

const RegisterMembership = () => {
  const { setMembershipType, membershipType }: any = useMembership();

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-start justify-between w-full gap-[1.88rem] ">
        {/* <h3 className=" text-sm font-bold">Membership Types</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center w-full gap-[1.5rem]">
          <button
            id="type-btn"
            className="relative flex items-center justify-start w-full gap-4   py-[1.4rem] px-[1.2rem] rounded-2xl min-h-[4.25rem]"
          >
            <input
              id="otp"
              type="radio"
              name="register"
              className="sr-only z-[1]"
              checked={membershipType === "otp"}
              onChange={(e: any) => setMembershipType(e.target.id)}
            />
            <span className="text-xs font-medium ml-8 mt-0.5">
              On Time Payment
            </span>
            <label
              htmlFor="otp"
              className=" absolute inset-0 w-full h-full z-[99] cursor-pointer"
            ></label>
            <span className=" absolute flex items-center justify-center m-auto border-[1.5px] border-black/40 rounded-full h-[1.5rem] w-[1.5rem] z-[5] transition-colors before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:flex before:items-center before:justify-center check"></span>
            <div className="absolute inset-0 bg-[#fff] rounded-2xl -z-[2] overlay border border-black/10"></div>
          </button>
          <button className="relative flex items-center justify-start w-full gap-4   py-[1.4rem] px-[1.2rem] rounded-2xl min-h-[4.25rem]">
            <input
              id="subscription"
              type="radio"
              name="register"
              className="sr-only"
              checked={membershipType === "subscription"}
              onChange={(e: any) => setMembershipType(e.target.id)}
            />
            <span className="text-xs font-medium ml-8 mt-0.5 overflow-x-scroll max-w-[80%] text-nowrap">
              Subscription (most popular accumulating entries)
            </span>
            <label
              htmlFor="subscription"
              className=" absolute inset-0 w-full h-full z-[99] cursor-pointer"
            ></label>
            <span className=" absolute flex items-center justify-center m-auto border-[1.5px] border-black/40 rounded-full h-[1.5rem] w-[1.5rem] z-[5] transition-colors before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:flex before:items-center before:justify-center check"></span>
            <div className="absolute inset-0 bg-[#fff] rounded-2xl -z-[2] overlay border border-black/10"></div>
          </button>
        </div>
        <hr className="w-full" /> */}
        <h3 className=" text-sm font-bold">Amount</h3>
        <div className="flex items-center justify-between w-full relative ">
          <h4 className=" text-sm font-light">Tier</h4>
          <p className=" text-sm font-light ">0 $</p>
        </div>
        <hr className="border w-[30%] border-dashed justify-end items-end flex ml-auto" />
        <div className="flex items-center justify-between w-full">
          <h4 className=" text-sm font-bold">Order Total</h4>
          <p className=" text-sm font-bold">0 $</p>
        </div>
        <hr className="w-full" />
        <h3 className=" text-sm font-bold">Payment Method</h3>

        <div className="border grid grid-cols-1 sm:grid-cols-2 rounded-2xl bg-[#3A3E3F] bg-opacity-75 relative w-full p-[0.3rem]">
          <button className="flex items-center justify-center h-full w-full bg-black  border-0 rounded-2xl gap-3 py-[1rem]">
            <Image
              src={"/assets/images/register/pay.svg"}
              width={24.1}
              height={24.1}
              className=""
              alt="button"
            />
            <span className="text-center text-sm font-semibold text-white">
              Pay by card
            </span>
          </button>

          <button className="flex items-center justify-center h-full w-full  border-0 rounded-2xl   gap-3 py-[1rem]">
            <Image
              src={"/assets/images/register/crypto.svg"}
              width={24.1}
              height={24.1}
              className=""
              alt="button"
            />
            <span className="text-center text-sm font-normal text-white">
              pay by crypto
            </span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterMembership;
