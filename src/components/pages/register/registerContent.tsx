import RegisterCard from "@/components/cards/registerCard";
import RegisterForm from "@/components/forms/registerForm";
import RegisterNavBar from "@/components/navbar/registerNavBar";
import React from "react";

function RegisterContent() {
  return (
    <div className="flex flex-col items-center w-full px-9  bg-white relative  ">
      <div className="bg-[#78DCF8]  w-full h-4/5 absolute">
        <RegisterNavBar />
      </div>

      <div className=" absolute top-[56%]  w-full px-12 ">
        <RegisterCard />

        <div className=" w-full px-10 py-9 absolute ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterContent;
