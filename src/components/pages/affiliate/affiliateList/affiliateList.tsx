import { affiliateList } from "@/constants/data";
import React from "react";
import AffiliateTabs from "../../../tabs/affiliate/affiliateTabs";

const AffiliateList = () => {
  return (
    <div className="flex flex-col items-start gap-[2rem] w-full">
      {/* <h3 className="text-[1.5rem] font-extrabold capitalize">transactions</h3> */}
      <div className="w-full flex lg:flex-row flex-col gap-2">
        <div className="lg:absolute mt-2 z-[4]">
          <h3 className="text-[1.5rem] font-extrabold capitalize flex items-center gap-1 ">
            affiliate <span className="font-normal">list</span>
          </h3>
        </div>
        <AffiliateTabs />
      </div>
    </div>
  );
};

export default AffiliateList;
