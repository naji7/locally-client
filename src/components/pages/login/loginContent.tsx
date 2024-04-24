import LoginForm from "@/components/forms/loginForm";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const LoginContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center w-full">
      <div className="flex flex-col items-center h-full justify-center w-full relative bg-[#78DCF8]">
        <Image
          src={"/assets/images/login/truck.png"}
          alt="truck"
          width={2000}
          height={2000}
          className="w-full h-auto max-w-[33.625rem] z-[2] px-[2rem] xl:px-0"
        />
        <Image
          src={"/assets/images/login/effect.svg"}
          alt="truck"
          width={2000}
          height={2000}
          className="w-full h-auto max-w-[21rem] absolute translate-x-[65%] left-0 right-0 -translate-y-[40%]"
        />
      </div>
      <div className="flex flex-col items-center h-full justify-center w-full relative py-[4rem] px-[2rem]">
        <div className="hidden xl:flex items-center gap-[0.7rem] absolute top-[4rem] -left-[1.3rem]">
          <div className="flex items-center justify-center bg-white w-[3.375rem] h-[3.375rem] rounded-full z-[99]">
            <button className="flex w-[2.375rem] h-[2.375rem] rounded-full bg-[#6ED9F7]  p-2.5">
              <ChevronLeftIcon className="font-bold" />
            </button>
          </div>

          <div className="flex flex-col items-start">
            <h3 className=" text-xl font-extrabold text-black  capitalize">
              Login
            </h3>
          </div>
        </div>
        <Image
          src={"/assets/images/login/effect-1.svg"}
          alt="truck"
          width={2000}
          height={2000}
          className="w-full h-auto max-w-[18.82925rem] absolute  left-0 right-0 top-0 translate-x-[70%] hidden xl:flex"
        />
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginContent;
