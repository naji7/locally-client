import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  url: string;
  name: string;
  date: string;
  userId: string;
  className: string;
};

export default function HomePrevious(props: Props) {
  return (
    <>
      <div className="relative rounded-[0.875rem] w-[11.2rem] h-[7.875rem] flex flex-shrink-0">
        <Image
          src={props.url}
          alt="previous"
          width={2000}
          height={2000}
          className="w-full h-full object-cover absolute inset-0 rounded-[0.875rem]"
        />
      </div>
      <div className="flex flex-col w-full h-[7.875rem] justify-between">
        <div className="flex flex-col">
          <h3 className="text-base leading-[1.625rem] capitalize font-semibold">
            {props.title}
          </h3>
          <h5 className="text-xs font-light capitalize">{props.date}</h5>
        </div>

        <div
          className={`w-full justify-between rounded-r-[0.8125rem] py-[0.75rem] flex items-center  text-sm font-semibold text-white capitalize px-4 relative ${props.className}`}
        >
          <div className="flex flex-col">
            <h3 className="text-xs leading-[1.25rem] font-semibold capitalize">
              {props.name}
            </h3>
            <h5 className="text-[0.625rem] font-light capitalize mt-1">
              {props.userId}
            </h5>
          </div>
          <span className="text-xs font-light capitalize">Winner</span>
          <div className="line-effect"></div>
        </div>
      </div>
    </>
  );
}
