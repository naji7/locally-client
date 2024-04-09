import React from "react";
import Image from "next/image";

function RegisterCard() {
  return (
    <div className="flex items-center justify-between w-full gap-4 px-12">
      <div className="flex flex-col  border-2 border-[#5EC1DC] w-[22rem] h-[25rem] rounded-2xl items-center justify-between py-7  bg-[#EFF9FB]  ">
        <div className="flex items-center justify-between w-3/4 gap-[3.7rem]   ">
          <div className="flex flex-col items-start justify-start ">
            <h3 className="text-base font-extrabold">Platinum</h3>
            <h3 className="text-base font-light ">Tier</h3>
          </div>
          <div className="flex items-center justify-center w-full gap-2">
            <h3 className="text-[34px] font-black">10</h3>
            <h3 className="font-normal text-[15px]">Free</h3>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-slate-200 h-[2.1rem]">
          <h3 className="text-xs font-medium">Accumulating Entries</h3>
        </div>
        <div className="flex flex-col items-start justify-center w-4/5 gap-2">
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-bold">
              $49.99 <span className="text-sm font-normal">Per Month</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Referral Commission:{" "}
              <span className="text-sm font-bold">10%</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Partner Store Discounts:{" "}
              <span className="text-sm font-bold">10%-15%</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <button className="border w-[95%] rounded-lg">
            <h3 className="text-sm font-normal py-3 px-28">View More</h3>
          </button>
          <button className="border border-[#5EC1DC] w-[95%] rounded-lg bg-white">
            <h3 className="text-sm text-[#5EC1DC] font-normal py-3 px-24">
              CHOOSE PLAN
            </h3>
          </button>
        </div>
      </div>

      {/* 2nd   */}

      <div className="flex flex-col  border-2 border-[#FE705C] w-[22rem] h-[25rem] rounded-2xl items-center justify-between py-7  bg-[#FFF1EF]  ">
        <div className="flex items-center justify-between w-3/4 gap-[3.7rem]   ">
          <div className="flex flex-col items-start justify-start ">
            <h3 className="text-base font-extrabold">Boomer</h3>
            <h3 className="text-base font-light ">Tier</h3>
          </div>
          <div className="flex items-center justify-center w-full gap-2">
            <h3 className="text-[34px] font-black">3</h3>
            <h3 className="font-normal text-[15px]">Free</h3>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-slate-200 h-[2.1rem]">
          <h3 className="text-xs font-medium">Accumulating Entries</h3>
        </div>
        <div className="flex flex-col items-start justify-center w-4/5 gap-2">
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-bold">
              $19.99 <span className="text-sm font-normal">Per Month</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Referral Commission:{" "}
              <span className="text-sm font-bold">5%</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Partner Store Discounts:{" "}
              <span className="text-sm font-bold">10%</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <button className="border w-[95%] rounded-lg">
            <h3 className="text-sm font-normal py-3 px-28">View More</h3>
          </button>
          <button className="border  w-[95%] rounded-lg bg-[#FE705C]">
            <h3 className="text-sm text-white font-normal py-3 px-28">
              SELECTED
            </h3>
          </button>
        </div>
      </div>

      {/* 3rd */}

      <div className="flex flex-col  border-2 border-[#FFBC0B] w-[22rem] h-[25rem] rounded-2xl items-center justify-between py-7  bg-[#FFF8E7]  ">
        <div className="flex items-center justify-between w-3/4 gap-[3.7rem]   ">
          <div className="flex flex-col items-start justify-start ">
            <h3 className="text-base font-extrabold">Gold</h3>
            <h3 className="text-base font-light ">Tier</h3>
          </div>
          <div className="flex items-center justify-center w-full gap-2">
            <h3 className="text-[34px] font-black">25</h3>
            <h3 className="font-normal text-[15px]">Free</h3>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-slate-200 h-[2.1rem]">
          <h3 className="text-xs font-medium">Accumulating Entries</h3>
        </div>
        <div className="flex flex-col items-start justify-center w-4/5 gap-2">
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-bold">
              $100 <span className="text-sm font-normal">Per Month</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Referral Commission:{" "}
              <span className="text-sm font-bold">25%</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Be Eligible To Apply For Winlad GOLD Card:{" "}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <button className="border w-[95%] rounded-lg">
            <h3 className="text-sm font-normal py-3 px-28">View More</h3>
          </button>
          <button className="border border-[#FFBC0B] w-[95%] rounded-lg bg-white">
            <h3 className="text-sm text-[#FFBC0B] font-normal py-3 px-24">
              CHOOSE PLAN
            </h3>
          </button>
        </div>
      </div>

      {/* 4th */}

      <div className="flex flex-col  border-2 w-[22rem] h-[25rem] rounded-2xl items-center justify-between py-7 border-[#1A1D21] bg-[#E8E8E9]  ">
        <div className="flex items-center justify-between w-3/4 gap-[3.7rem]   ">
          <div className="flex flex-col items-start justify-start ">
            <h3 className="text-base font-extrabold">Black</h3>
            <h3 className="text-base font-light ">Tier</h3>
          </div>
          <div className="flex items-center justify-center w-full gap-2">
            <h3 className="text-[34px] font-black">150</h3>
            <h3 className="font-normal text-[15px]">Free</h3>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-slate-200 h-[2.1rem]">
          <h3 className="text-xs font-medium">Accumulating Entries</h3>
        </div>
        <div className="flex flex-col items-start justify-center w-4/5 gap-2">
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-bold">
              $5000 <span className="text-sm font-normal">Per Month</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
              Referral Commission:{" "}
              <span className="text-sm font-bold">50%</span>
            </h3>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/register/point.svg"}
              width={18}
              height={18}
              className=""
              alt="list"
            />
            <h3 className="text-sm font-normal">
            Customized Partner Store discount rates ranging upto 20%
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <button className="border w-[95%] rounded-lg">
            <h3 className="text-sm font-normal py-3 px-28">View More</h3>
          </button>
          <button className="border border-[#1A1D21] w-[95%] rounded-lg bg-white">
            <h3 className="text-sm text-[#1A1D21] font-normal py-3 px-24">
              CHOOSE PLAN
            </h3>
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default RegisterCard;
