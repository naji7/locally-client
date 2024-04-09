import RegisterCard from "@/components/cards/registerCard";
import RegisterForm from "@/components/forms/registerForm";
import RegisterNavBar from "@/components/navbar/registerNavBar";
import React from "react";
import Otp from "./otp";

function RegisterContent() {
  return (
    <div className="flex flex-col items-between w-full   bg-white relative  ">
      <div className="bg-[#78DCF8] px-9 w-full h-4/5 absolute">
        <RegisterNavBar />
      </div>

      <div className=" absolute top-[56%]  w-full  ">
        <RegisterCard />

        <div className=" w-full  absolute ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterContent;
