"use client"

import Image from "next/image";
import React, { useState } from 'react';

function RegisterNavBar() {

    const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (button:any) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full relative gap-9 ">
      {/* <Image
        src={"/assets/images/register/desstyle.svg"}
        width={404}
        height={346}
        className=" p-2 rounded-2xl py-2 absolute right-0 "
        alt="2023 MAZDA BT-50"
      /> */}
      <div className="flex flex-col items-center justify-center w-full">
      <Image
        src={"/assets/images/register/Car.svg"}
        width={248}
        height={180}
        className=" p-2 rounded-2xl py-2  "
        alt="2023 MAZDA BT-50"
      />
      <h3 className=" text-[1.6rem] font-black">Create an Account</h3>
      </div>
     
      <div className="flex flex-row items-center justify-between w-1/2 border rounded-[69px] py-2 px-3  bg-white gap-4">
        {/* <button  className="justify-items text-sm font-medium border rounded-[90px] py-4 px-12 bg-black text-white">Monthly</button>
        <button className="justify-items text-sm font-medium border-0 rounded-[90px] py-4 px-12 bg-white text-black"> Quartly <span className="text-[#EE391C]">(save 10%)</span></button>
        <button className="justify-items text-sm font-medium border-0 rounded-[90px] py-4 px-12 bg-white text-black">Yearly <span className="text-[#EE391C]">(save 10%)</span> </button> */}
        <button
        className={`justify-items text-sm font-medium border-0 rounded-[90px] py-4 px-12 ${
          selectedButton === 'monthly'
            ? 'bg-black text-white'
            : 'bg-white text-black'
        }`}
        onClick={() => handleClick('monthly')}
        onMouseEnter={() => setSelectedButton('monthly')}
        onMouseLeave={() =>
          setSelectedButton(selectedButton === 'monthly' ? '' : selectedButton)
        }
      >
        Monthly
      </button>
      <button
        className={`justify-items text-sm font-medium border-0 rounded-[90px] py-4 px-12 ${
          selectedButton === 'quarterly'
            ? 'bg-black text-white'
            : 'bg-white text-black'
        }`}
        onClick={() => handleClick('quarterly')}
        onMouseEnter={() => setSelectedButton('quarterly')}
        onMouseLeave={() =>
          setSelectedButton(selectedButton === 'quarterly' ? '' : selectedButton)
        }
      >
        Quartly <span className="text-[#EE391C]">(save 10%)</span>
      </button>
      <button
        className={`justify-items text-sm font-medium border-0 rounded-[90px] py-4 px-12 ${
          selectedButton === 'yearly'
            ? 'bg-black text-white'
            : 'bg-white text-black'
        }`}
        onClick={() => handleClick('yearly')}
        onMouseEnter={() => setSelectedButton('yearly')}
        onMouseLeave={() =>
          setSelectedButton(selectedButton === 'yearly' ? '' : selectedButton)
        }
      >
        Yearly <span className="text-[#EE391C]">(save 10%)</span>
      </button>
      </div>
      
    </div>
  );
}

export default RegisterNavBar;
