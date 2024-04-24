"use client";

import { affiliateList } from "@/constants/data";
import { TabsHeader } from "./tabsHeader";

export default function AffiliateTabs() {
  const tabs = [
    {
      title: "Level 01",
      offer: "",
      value: "Level 01",
      content: (
        <div className="w-full grid  gap-[1.2rem]">
          <AffiliateListContent />
        </div>
      ),
    },
    {
      title: "Level 02",
      offer: "",
      value: "Level 02",
      content: (
        <div className="w-full grid  gap-[1.2rem]">
          <AffiliateListContent />
        </div>
      ),
    },
    {
      title: "Level 03",
      offer: "",
      value: "Level 03",
      content: (
        <div className="w-full grid  gap-[1.2rem]">
          <AffiliateListContent />
        </div>
      ),
    },
    {
      title: "Level 04",
      offer: "",
      value: "Level 04",
      content: (
        <div className="w-full grid gap-[1.2rem]">
          <AffiliateListContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] overflow-y-scroll [perspective:1000px] relative b flex mx-auto w-full  items-start justify-center">
      <TabsHeader tabs={tabs} />
    </div>
  );
}
const AffiliateListContent = () => {
  return (
    <>
      <ul className=" flex flex-col w-full min-w-[32rem] max-w-[32rem] sm:max-w-[100%]  overflow-scroll">
        <li className="grid grid-cols-3 items-center  w-full transactionList relative py-[1rem] md:py-[1.4rem] bg-[#F5F5F5] pl-4 sm:pl-[1.75rem] rounded-[0.25rem]">
          <h4 className="font-normal text-xs sm:text-sm capitalize text-[#6B6B6B]">
            Name
          </h4>

          <div className="flex items-center gap-3 font-normal text-xs sm:text-sm capitalize text-[#6B6B6B]">
            <span>Email</span>
          </div>

          <div className="flex items-center gap-3 font-normal text-xs sm:text-sm capitalize text-[#6B6B6B]">
            Subscription Plan
          </div>
        </li>
        {affiliateList.map((affliate, index) => (
          <li
            key={index}
            className="grid grid-cols-3 items-center w-full transactionList relative py-[1rem] md:py-[1.4rem] border-b pl-4 sm:pl-[1.75rem] rounded-[0.25rem]"
          >
            <h4 className="font-normal text-xs sm:text-sm  capitalize">
              {affliate.name}
            </h4>

            <div className="flex items-center gap-3  text-xs sm:text-sm font-normal capitalize text-nowrap">
              {affliate.email}
            </div>

            <div className="flex items-center gap-3  text-xs sm:text-sm font-normal capitalize ">
              {affliate.plan}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
