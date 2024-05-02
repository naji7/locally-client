import React from "react";

import { CheckIcon } from "@heroicons/react/24/outline";

function SubscriptionCard({ item, index, handleClick, selectedPlan }: any) {
  // const boldNumbers = (text: string) => {
  //   const parts = text.split(/(\$[\d.]+|%[\d.-]+)/g);
  //   const elements = parts.map((part, index) => {
  //     if (part.match(/(\$[\d.]+|%[\d.-]+%?)/)) {
  //       return (
  //         <span key={index} className="font-bold">
  //           {part}
  //         </span>
  //       );
  //     } else {
  //       return part;
  //     }
  //   });
  //   return elements;
  // };

  return (
    <div
      key={index}
      className="pt-[2rem] pb-[1rem] px-[0.9rem] bg-[#EFF9FB] min-h-[25.25rem] w-full rounded-[1rem] border-2 border-[#5EC1DC] flex flex-col items-center justify-between  relative min-w-[21.375rem]"
      style={{
        backgroundColor: item.background,
        borderColor: item.main,
      }}
    >
      <div className="flex flex-col items-start gap-[0.9rem] w-full px-[1.1rem]">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col">
            <h4 className="text-[1.5rem] font-extrabold leading-[2rem] capitalize">
              {item.tier}
            </h4>
            <span className="text-[1.5rem] font-light leading-7">Tier</span>
          </div>
          <div className="flex items-end gap-1.5">
            <span className="text-[2.125rem] font-black capitalize leading-8">
              {item.entries}
            </span>
            <div className="flex items-center flex-col capitalize">
              <span
                className="relative text-[#9B9B9B] text-[1.25rem] leading-6 font-normal before:absolute before:w-[1.3rem] before:h-[2px] before:bg-[#FE705C] before:-right-[5px] before:bottom-[1rem] before:translate-y-[50%] before:my-auto before:rotate-[-35deg] before:rounded-md"
                style={{
                  display:
                    item.oldEntries === "" || item.oldEntries === "0"
                      ? "none"
                      : "",
                }}
              >
                {item.oldEntries}
              </span>
              <h4 className="text-[0.9375rem] font-normal">Free</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-[0.6rem] capitalize text-[#282C33] text-[0.75rem] font-medium bg-black/[0.07] w-[calc(100%+4.1rem)] -ml-[2.05rem]  my-[0.5rem]">
          accumulating entries
        </div>
        <ul className="flex flex-col items-start gap-2 mt-[0.2rem]">
          {item.features &&
            item.features.map((item: string, index: any) => {
              return (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[0.875rem] font-medium"
                >
                  <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400 flex-shrink-0" />
                  <div className="flex items-center gap-1">{item}</div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex flex-col items-center w-full justify-items-end gap-2 mt-[1.5rem]">
        {/* <button className="bg-white/50 rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal capitalize flex-shrink-0 w-full">
          view more...
        </button> */}
        <button
          className="bg-[#5EC1DC] text-white py-[0.75rem] flex items-center justify-center text-sm font-normal uppercase flex-shrink-0 w-full rounded-[0.5rem]"
          style={{ backgroundColor: item.main }}
          onClick={() => handleClick(item)}
        >
          CHOOSE PLAN
        </button>
      </div>
      <div
        className={`${
          selectedPlan === item ? "flex" : "hidden"
        } items-end justify-center h-full absolute inset-0 rounded-[1rem]  backdrop-blur-[1.2px] pt-[2rem] pb-[1rem]`}
      >
        <span
          className="text-sm font-bold text-white  w-full py-[0.75rem] flex items-center justify-center"
          style={{ backgroundColor: item.main }}
        >
          Selected
        </span>
      </div>
    </div>
  );
}

export default SubscriptionCard;
