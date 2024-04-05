import RegisterCard from "@/components/cards/registerCard";
import RegisterForm from "@/components/forms/registerForm";
import RegisterNavBar from "@/components/navbar/registerNavBar";
import React from "react";

function RegisterContent() {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="bg-[#78DCF8] px-9 pr-[1.25rem] py-[2.3rem] w-full h-4/5 relative">
      < RegisterNavBar />
      {/* <div className="absolute ">
      <RegisterCard/>
      </div> */}
      </div>
      
      
      <div className="bg-white px-9 pr-[1.25rem] py-[2.3rem] w-full relative ">
      < RegisterForm />
      </div>

    </div>
  );
}

export default RegisterContent;
