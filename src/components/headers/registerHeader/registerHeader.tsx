"use client";

import RegisterTabs from "@/components/tabs/register/registerTabs";
import Image from "next/image";
import React, { useState } from "react";

function RegisterHeader() {
  return (
    <div className="flex flex-col items-center justify-between w-full relative">
      <Image
        src={"/assets/images/register/desstyle.svg"}
        width={404}
        height={346}
        className=" p-2 rounded-2xl py-2 absolute right-0 "
        alt="2023 MAZDA BT-50"
      />
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          src={"/assets/images/register/locallySvg.svg"}
          width={1000}
          height={1000}
          className="rounded-2xl max-w-[15.5rem] w-full h-auto"
          alt="MAZDABT-50"
        />
        <h3 className="text-[1.6rem] font-black">Create an Account</h3>
      </div>
    </div>
  );
}

export default RegisterHeader;
