"use client";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../sidebar/sidebar";
import React, { useState } from "react";

type INavbar = {
  title: string;
  subtitle: string;
  setter: any;
};

const Navbar: React.FC<INavbar> = ({ title, subtitle, setter }) => {
  return (
    <div className="flex pl-[1.25rem] xl:pl-[13.7rem] w-full mt-[1rem] sm:mt-[2.9rem] min-h-[3.875rem] items-center justify-between pr-[1.25rem]">
      {/* <button className="xl:hidden flex items-center justify-center p-2">
        <Bars3CenterLeftIcon className="w-8" />
      </button> */}
      <button
        className=" xl:hidden flex items-center justify-center p-2"
        onClick={setter}
      >
        <Bars3CenterLeftIcon className="w-8" />
      </button>

      <div className="hidden xl:flex items-center gap-[0.7rem]">
        <div className="flex items-center justify-center bg-white w-[3.375rem] h-[3.375rem] rounded-full z-[99]">
          <button className="flex w-[2.375rem] h-[2.375rem] rounded-full bg-[#FF4C00]  p-2">
            <ChevronLeftIcon />
          </button>
        </div>

        <div className="flex flex-col items-start">
          <h3 className=" text-xl font-extrabold text-black  capitalize">
            {title}
          </h3>
          <h5 className="text-sm font-light capitalize">{subtitle}</h5>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <div className="relative flex">
          <button className="flex items-center justify-center bg-[#F5F5F5] w-[3.75rem] h-[3.75rem] rounded-full">
            <Image
              src={"/assets/icons/navbar/notifications.svg"}
              width={100}
              height={100}
              className="w-[1.5rem] h-[1.5rem]"
              alt="notify"
            />
          </button>
          <div className="bg-[#EE391C] w-[1.3125rem] h-[1.3125rem] rounded-full flex items-center justify-center text-[10px] text-white absolute right-0 leading-[1.3125rem]">
            <span className="m-auto flex items-center justify-center mt-[1px]">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
