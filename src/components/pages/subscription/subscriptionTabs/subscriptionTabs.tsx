"use client";

import { TabsContent } from "./tabsContent";
import { CheckIcon } from "@heroicons/react/24/outline";
import { planDetails } from "@/constants/data";

export default function SubscriptionTabs() {
  const tabs = [
    {
      title: "monthly",
      offer: "",
      value: "monthly",
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Monthly />
        </div>
      ),
    },
    {
      title: "quartly",
      offer: "(save 10%)",
      value: "quartly",
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Quartly/>
        </div>
      ),
    },
    {
      title: "yearly ",
      offer: "(save 20%)",
      value: "yearly",
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Yearly/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[140rem] md:h-[85rem] lg:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <TabsContent tabs={tabs} />
    </div>
  );
}
const Monthly = () => {
  const boldNumbers = (text: string) => {

    const parts = text.split(/(\$[\d.]+|%[\d.-]+)/g);
    const elements = parts.map((part, index) => {
      if (part.match(/(\$[\d.]+|%[\d.-]+%?)/)) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
    return elements;
  };

  return (
    <>
      {planDetails.map((plan, index) => (
        <div
          key={index}
          className="pt-[2rem] pb-[1rem] px-[0.9rem] bg-[#5ec1dc10] min-h-[25.25rem] w-full rounded-[1rem] border-2 border-[#5EC1DC] flex flex-col items-center justify-between  relative"
          style={{ backgroundColor: plan.background, borderColor: plan.main }}
        >
          <div className="flex flex-col items-start gap-[0.9rem] w-full px-[1.1rem]">
            <div className="flex items-center justify-between w-full ">
              <div className="flex flex-col">
                <h4 className="text-[1.5rem] font-extrabold leading-[2rem] capitalize">
                  {plan.tier}
                </h4>
                <span className="text-[1.5rem] font-light leading-7">Tier</span>
              </div>
              <div className="flex items-end gap-1.5">
                <span className="text-[2.125rem] font-black capitalize leading-8">
                  {plan.entry}
                </span>
                <div className="flex items-center flex-col capitalize">
                  <span
                    className="relative text-[#9B9B9B] text-[1.25rem] leading-6 font-normal before:absolute before:w-[1.3rem] before:h-[2px] before:bg-[#FE705C] before:-right-[5px] before:bottom-[1rem] before:translate-y-[50%] before:my-auto before:rotate-[-35deg] before:rounded-md"
                    style={{ display: plan.hidden }}
                  >
                    {plan.oldEntry}
                  </span>
                  <h4 className="text-[0.9375rem] font-normal">Free</h4>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center py-[0.6rem] capitalize text-[#282C33] text-[0.75rem] font-medium bg-black/[0.07] w-[calc(100%+4.1rem)] -ml-[2.05rem] -z-[2] my-[0.5rem]">
              accumulating entries
            </div>
            <ul className="flex flex-col items-start gap-2 mt-[0.2rem]">
              <li className="flex items-center gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1 text-nowrap">
                  {boldNumbers(plan.benefits ? plan.benefits[0] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1">
                  {boldNumbers(plan.benefits ? plan.benefits[1] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400 flex-shrink-0" />
                <div className="flex items-center gap-1  font-normal">
                  {boldNumbers(plan.benefits ? plan.benefits[2] : "")}
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-full justify-items-end gap-2">
            <button className="bg-white/50 rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal capitalize flex-shrink-0 w-full">
              view more...
            </button>
            <button
              className="bg-[#5EC1DC] text-white rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal uppercase flex-shrink-0 w-full"
              style={{ backgroundColor: plan.main }}
            >
              CHOOSE PLAN
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const Quartly = () => {
  const boldNumbers = (text: string) => {

    const parts = text.split(/(\$[\d.]+|%[\d.-]+)/g);
    const elements = parts.map((part, index) => {
      if (part.match(/(\$[\d.]+|%[\d.-]+%?)/)) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
    return elements;
  };

  return (
    <>
      {planDetails.map((plan, index) => (
        <div
          key={index}
          className="pt-[2rem] pb-[1rem] px-[0.9rem] bg-[#5ec1dc10] min-h-[25.25rem] w-full rounded-[1rem] border-2 border-[#5EC1DC] flex flex-col items-center justify-between  relative"
          style={{ backgroundColor: plan.background, borderColor: plan.main }}
        >
          <div className="flex flex-col items-start gap-[0.9rem] w-full px-[1.1rem]">
            <div className="flex items-center justify-between w-full ">
              <div className="flex flex-col">
                <h4 className="text-[1.5rem] font-extrabold leading-[2rem] capitalize">
                  {plan.tier}
                </h4>
                <span className="text-[1.5rem] font-light leading-7">Tier</span>
              </div>
              <div className="flex items-end gap-1.5">
                <span className="text-[2.125rem] font-black capitalize leading-8">
                  {plan.entry}
                </span>
                <div className="flex items-center flex-col capitalize">
                  <span
                    className="relative text-[#9B9B9B] text-[1.25rem] leading-6 font-normal before:absolute before:w-[1.3rem] before:h-[2px] before:bg-[#FE705C] before:-right-[5px] before:bottom-[1rem] before:translate-y-[50%] before:my-auto before:rotate-[-35deg] before:rounded-md"
                    style={{ display: plan.hidden }}
                  >
                    {plan.oldEntry}
                  </span>
                  <h4 className="text-[0.9375rem] font-normal">Free</h4>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center py-[0.6rem] capitalize text-[#282C33] text-[0.75rem] font-medium bg-black/[0.07] w-[calc(100%+4.1rem)] -ml-[2.05rem] -z-[2] my-[0.5rem]">
              accumulating entries
            </div>
            <ul className="flex flex-col items-start gap-2 mt-[0.2rem]">
              <li className="flex items-center gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1 text-nowrap">
                  {boldNumbers(plan.benefits ? plan.benefits[0] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1">
                  {boldNumbers(plan.benefits ? plan.benefits[1] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400 flex-shrink-0" />
                <div className="flex items-center gap-1  font-normal">
                  {boldNumbers(plan.benefits ? plan.benefits[2] : "")}
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-full justify-items-end gap-2">
            <button className="bg-white/50 rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal capitalize flex-shrink-0 w-full">
              view more...
            </button>
            <button
              className="bg-[#5EC1DC] text-white rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal uppercase flex-shrink-0 w-full"
              style={{ backgroundColor: plan.main }}
            >
              CHOOSE PLAN
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const Yearly = () => {
  const boldNumbers = (text: string) => {

    const parts = text.split(/(\$[\d.]+|%[\d.-]+)/g);
    const elements = parts.map((part, index) => {
      if (part.match(/(\$[\d.]+|%[\d.-]+%?)/)) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
    return elements;
  };

  return (
    <>
      {planDetails.map((plan, index) => (
        <div
          key={index}
          className="pt-[2rem] pb-[1rem] px-[0.9rem] bg-[#5ec1dc10] min-h-[25.25rem] w-full rounded-[1rem] border-2 border-[#5EC1DC] flex flex-col items-center justify-between  relative"
          style={{ backgroundColor: plan.background, borderColor: plan.main }}
        >
          <div className="flex flex-col items-start gap-[0.9rem] w-full px-[1.1rem]">
            <div className="flex items-center justify-between w-full ">
              <div className="flex flex-col">
                <h4 className="text-[1.5rem] font-extrabold leading-[2rem] capitalize">
                  {plan.tier}
                </h4>
                <span className="text-[1.5rem] font-light leading-7">Tier</span>
              </div>
              <div className="flex items-end gap-1.5">
                <span className="text-[2.125rem] font-black capitalize leading-8">
                  {plan.entry}
                </span>
                <div className="flex items-center flex-col capitalize">
                  <span
                    className="relative text-[#9B9B9B] text-[1.25rem] leading-6 font-normal before:absolute before:w-[1.3rem] before:h-[2px] before:bg-[#FE705C] before:-right-[5px] before:bottom-[1rem] before:translate-y-[50%] before:my-auto before:rotate-[-35deg] before:rounded-md"
                    style={{ display: plan.hidden }}
                  >
                    {plan.oldEntry}
                  </span>
                  <h4 className="text-[0.9375rem] font-normal">Free</h4>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center py-[0.6rem] capitalize text-[#282C33] text-[0.75rem] font-medium bg-black/[0.07] w-[calc(100%+4.1rem)] -ml-[2.05rem] -z-[2] my-[0.5rem]">
              accumulating entries
            </div>
            <ul className="flex flex-col items-start gap-2 mt-[0.2rem]">
              <li className="flex items-center gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1 text-nowrap">
                  {boldNumbers(plan.benefits ? plan.benefits[0] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400" />
                <div className="flex items-center gap-1">
                  {boldNumbers(plan.benefits ? plan.benefits[1] : "")}
                </div>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] font-medium">
                <CheckIcon className="w-[1.125rem] h-[1.125rem] text-green-400 flex-shrink-0" />
                <div className="flex items-center gap-1  font-normal">
                  {boldNumbers(plan.benefits ? plan.benefits[2] : "")}
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-full justify-items-end gap-2">
            <button className="bg-white/50 rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal capitalize flex-shrink-0 w-full">
              view more...
            </button>
            <button
              className="bg-[#5EC1DC] text-white rounded-lg py-[0.75rem] flex items-center justify-center text-sm font-normal uppercase flex-shrink-0 w-full"
              style={{ backgroundColor: plan.main }}
            >
              CHOOSE PLAN
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
