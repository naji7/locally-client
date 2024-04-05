import Previous from "@/components/sliders/previous/previous";
import Image from "next/image";

const PastContent = () => {
  return (
    <div className="flex flex-col items-center pl-[2.5rem] xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full relative gap-[3rem]">
      <div className="grid grid-cols-5 w-full gap-[3rem] lg:gap-[5rem]">
        <div className="flex rounded-[1rem] w-full h-[23.375rem] relative order-2 md:order-1 col-span-5 md:col-span-3">
          <Image
            src={"/assets/images/giveaway/upcoming/main-banner.png"}
            alt="banner"
            width={2000}
            height={2000}
            className="w-full h-full absolute inset-0 rounded-[1rem] object-contain -z-[2] "
          />
          <Image
            src={"/assets/images/giveaway/upcoming/main-banner.png"}
            alt="banner"
            width={2000}
            height={2000}
            className="w-full h-full absolute inset-0 rounded-[1rem] object-cover  -z-[4]"
          />
          <div className="w-full h-full absolute inset-0 rounded-[1rem] backdrop-blur-xl bg-black/10 -z-[3]"></div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full col-span-5 order-1 md:order-2 md:col-span-2 gap-[1.2rem]">
          <div className="flex rounded-full w-[5.5rem] h-[5.5rem] border border-white/20 items-center relative">
            <Image
              src={"/assets/images/giveaway/upcoming/profile.png"}
              alt="banner"
              width={100}
              height={100}
              className="w-full h-full absolute inset-0 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[2.6rem] sm:text-[3.375rem] font-black">
              $170.35
            </h2>
            <div className="flex flex-row items-center justify-center lg:justify-start  w-full gap-2 ">
              <h3 className="text-xs sm:text-base font-normal  text-[#6B6B6B]">
                Your Balance
              </h3>
              <button className="text-center border bg-gradient-to-br from-yellow-400 via-yellow-300 to-gray-300 rounded-[60px]  text-xs sm:text-sm font-extrabold px-2 py-1  w-[72px] sm:w-[76px] h-[25px] sm:h-[32px] flex items-center justify-center">
                Gold
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Previous title="Giveaways"/>
      </div>
    </div>
  );
};

export default PastContent;
