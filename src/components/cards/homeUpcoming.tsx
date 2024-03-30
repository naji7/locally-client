import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  url: string;
  price: string;
  className: string;
};

export default function HomeUpcoming(props: Props) {
  return (
    <>
      <div className="flex flex-col gap-[1.44rem]">
        <div className="relative rounded-[0.875rem] w-full h-[11.5rem]">
          <Image
            src={props.url}
            alt="upcoming"
            width={2000}
            height={2000}
            className="w-full h-full object-cover absolute inset-0 rounded-[0.875rem]"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base leading-[1.625rem] capitalize font-semibold">
            {props.title}
          </h3>
          <h5 className="text-xs font-light capitalize">{props.price}</h5>
        </div>
      </div>
      <button
        className={`bg-[#FF4D00] w-full rounded-lg py-[0.75rem] px-[3.65rem] text-sm font-semibold text-white capitalize ${props.className}`}
      >
        One Off Packages
      </button>
    </>
  );
}
