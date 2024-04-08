import React from "react";
import Image from "next/image";

function RegisterForm() {
  return (
    <div className="flex items-center justify-between w-full ">
      {/* user info */}
      <div className="flex flex-col items-start justify-center w-full gap-4">
        <h3 className="text-sm font-bold">User Info</h3>
        <div className="relative items-start justify-center w-full">
          <input
            id="fname"
            type="fname"
            placeholder="Please Enter Full Name"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/fName.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <input
            id="email"
            type="email"
            placeholder="Please Enter Email Address"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/email.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <input
            id="password"
            type="password"
            placeholder="Please Enter Password"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/pw.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <input
            id="confirmpassword"
            type="confirmpassword"
            placeholder="Please Enter Confirm Password"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/pw.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <input
            id="tel"
            type="tel"
            placeholder="+61"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/flag.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
        <div className="relative items-start justify-center w-full">
          <input
            id="id"
            type="id"
            placeholder="Affiliate ID (Optional)"
            className="border rounded-xl w-1/2 h-16 pl-10 pr-4 text-xs text-[#000000]  font-light bg-[#C4CDDF] bg-opacity-30 placeholder-black opacity-35 placeholder:text-xs md:placeholder:text-base"
          />
          <Image
            src={"/assets/images/register/Id.svg"}
            width={18}
            height={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
            alt="notify"
          />
        </div>
      </div>
     <hr></hr>
    </div>
  );
}

export default RegisterForm;
