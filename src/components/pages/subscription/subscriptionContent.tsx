import EarningBalance from "@/components/cards/earningBalance";
import Image from "next/image";
import SubscriptionTabs from "./subscriptionTabs/subscriptionTabs";

export default function SubscriptionContent() {
  return (
    <div className="flex flex-col items-center pl-[1.25rem] xl:pl-[16.75rem] pr-[1.25rem] py-[2rem] w-full ">
      <Image
        src={"/assets/images/home/effect.svg"}
        alt="effect"
        className="w-auto h-auto absolute top-0 left-[30%]"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-6 items-center gap-[7.5rem] px-[2rem] 2xl:px-[5rem]">
        <div className="flex  col-span-7 lg:col-span-3 rounded-[1rem] min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem] px-[0.75rem] py-4  items-end h-full relative">
          <Image
            src={"/assets/images/subscription/truck.png"}
            alt="effect"
            className="w-full h-auto"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex col-span-7 lg:col-span-3 min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem]">
          <EarningBalance />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-[3.3rem]">
        <div className="relative">
          <h2 className="text-[2.5625rem] font-medium capitalize">
            Choose Your Plan
          </h2>
          <Image
            src={"/assets/images/subscription/text-effect.svg"}
            alt="effect"
            className="w-[8.9rem] h-[2.7rem] absolute right-0 -bottom-[12px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-full">
          <SubscriptionTabs/>
        </div>
      </div>
    </div>
  );
}
