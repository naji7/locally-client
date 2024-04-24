import Balance from "@/components/cards/balance";
import Image from "next/image";
import HomeEffect from "@/components/effects/homeEffect";
import AffiliateList from "./affiliateList/affiliateList";

const AffiliateContent = () => {
  return (
    <div className="flex flex-col items-start  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full gap-[3.2rem]">
        <div className="col-span-1 flex flex-col items-center lg:items-start justify-center gap-8 relative">
          <button className=" absolute text-white bg-black capitalize h-[4rem] justify-center inline-flex items-center py-[0.25rem] px-[0.6875rem] flex-col  font-black rounded-full right-0 top-0">
          <span className="text-[2.125rem]">02</span>
          </button>
          <Balance
            url="/assets/images/cards/balance/affi.svg"
            amount={160.35}
            name="Total Affiliates"
          />
          <button className="flex items-center justify-center text-xs sm:text-base border text-white bg-[#FF4C00] rounded-[16px] py-[0.9rem] sm:py-[1.3rem] w-full">
            Withdraw
          </button>
        </div>
        <div className="col-span-1 h-full w-full">
          <div className="w-full bg-[#EFF9FB] border border-[#5EC1DC] h-full rounded-[1.5rem] px-[3rem] py-[2rem] flex flex-col">
            <div className="flex flex-col">
              <span className="text-sm text-[#6B6B6B] capitalize font-light">
                Full name
              </span>
              <h5 className="text-sm font-bold capitalize">mohammad Reza</h5>
            </div>
            <hr className="bg-black  my-4 w-full " />
            <div className="flex flex-col">
              <span className="text-sm text-[#6B6B6B] capitalize font-light">
                Your Email
              </span>
              <h5 className="text-sm font-bold">
                mrfarahzad@gmail.com
              </h5>
            </div>
            <hr className="bg-black  my-4 w-full " />
            <div className="flex flex-col">
              <span className="text-sm text-[#6B6B6B] capitalize font-light">
                Your Affiliate ID
              </span>
              <div className="text-sm font-bold capitalize flex items-center justify-between gap-0.5">
                <span className="max-w-[80%] overflow-x-scroll text-nowrap">rtOyChXMYHbHE7ii4LihKYiTREY2</span>
                <Image
                  src={"/assets/icons/affiliate/copy-icon.svg"}
                  alt="copy"
                  className="w-5 h-5 cursor-pointer"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <hr className="bg-black  my-4 w-full " />

            <div className="flex flex-col">
              <span className="text-sm text-[#6B6B6B] capitalize font-light">
                Your Affiliate Link
              </span>
              <div className="text-sm font-bold capitalize flex items-center justify-between gap-0.5">
                <span className="max-w-[80%] overflow-x-scroll text-nowrap">
                  https://www.winlads.com/?ref=rtOyChXMYHbHE7ii4LihKYiTREY2
                </span>
                <Image
                  src={"/assets/icons/affiliate/copy-icon.svg"}
                  alt="copy"
                  className="w-5 h-5 cursor-pointer"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AffiliateList/>
    </div>
  );
};

export default AffiliateContent;
