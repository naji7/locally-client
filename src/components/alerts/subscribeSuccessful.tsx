"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { setToken } from "@/services/axios";
import { AUTH_TOKEN } from "@/constants";

const SubscribeSuccessful = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      setIsSuccess(true);
      const intervalId = setInterval(() => {
        setSeconds((prev) => {
          // Ensure that the countdown stops at 0
          if (prev <= 1) {
            localStorage.setItem(AUTH_TOKEN, token);
            setToken(token);
            clearInterval(intervalId);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        // Clear the interval when the component unmounts
        clearInterval(intervalId);
      };
    } else {
      setIsSuccess(false);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center px-5 sm:px-10">
      <div className="flex flex-col items-center w-full max-w-[40rem]">
        <Image
          src={"/assets/images/alerts/main-car.png"}
          alt="main"
          width={1000}
          height={1000}
          className="max-w-[20rem] sm:max-w-[30rem] w-full h-auto"
        />
        <div className="h-[5.5rem] sm:h-[11rem] rounded-[1.5rem] bg-[#EFF9FB] relative  px-[1.5rem] py-[2.5rem] w-[calc(100%-3.5rem)] sm:w-[calc(100%-5.5rem)] lg:w-[calc(100%)] flex items-center justify-start max-w-[39rem] -ml-8 sm:ml-0">
          <div className="flex items-center gap-3 sm:gap-[1.5rem] w-full h-full z-[99]">
            <div className="bg-[#5CFE89] w-[0.3125rem] h-full min-h-[2.5rem] rounded-[1.5rem]"></div>
            <div className="flex flex-col items-start justify-center h-full mt-1">
              <h4 className="text-[0.575rem] sm:text-[0.875rem] text-black font-medium capitalize text-nowrap max-w-[15rem]">
                {`you will redirected to the dashboard after ${seconds}`}
              </h4>
              <h2 className="text-[1rem] sm:text-[1.875rem] text-black font-extrabold capitalize">
                {isSuccess ? "Subscription Successful !" : "Subscription Fail"}
              </h2>
            </div>
          </div>
          <div className="w-[5.5rem] h-[5.5rem] sm:w-[11rem] sm:h-[11rem] rounded-full bg-[#E4EFF0] flex items-center justify-center flex-shrink-0 absolute right-0 translate-x-[50%] z-[9]">
            <div className="w-[4rem] h-[4rem] sm:w-[8.5rem] sm:h-[8.5rem] bg-white rounded-full flex items-center justify-center">
              <div className="bg-[#5CFE89] border border-white w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem] rounded-full flex items-center justify-center activeEntry-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="max-w-[1.5rem] sm:max-w-[3rem] w-full"
                >
                  <path
                    d="M40 13L18 35L8 25"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/images/entries/activeentry-effect.png"}
            width={492}
            height={357}
            className="w-full h-full absolute inset-0 rounded-[1.5rem]"
            alt="active-effect"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSuccessful;
