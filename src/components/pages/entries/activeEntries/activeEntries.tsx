import Image from "next/image";

const ActiveEntries = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between w-full gap-[3rem]">
      <div className="col-span-2 flex items-center">
        <div className="h-[7.5rem] sm:h-[11rem] rounded-[1.5rem] bg-[#EFF9FB] relative  px-[1.5rem] py-[2.5rem] w-[calc(100%-5.5rem)] flex items-center justify-start">
          <div className="flex items-center gap-4 sm:gap-[1.5rem] w-full h-full z-[99]">
            <div className="bg-[#FE705C] w-[0.3125rem] h-full rounded-[1.5rem]"></div>
            <div className="flex flex-col items-start justify-center h-full mt-1">
              <h4 className="text-[0.725rem] sm:text-[1.25rem] text-black font-medium capitalize">
                Total
              </h4>
              <h2 className="text-[1.1rem] sm:text-[1.875rem] text-black font-extrabold capitalize">
                Active Entries
              </h2>
            </div>
          </div>
          <div className="w-[7.5rem] h-[7.5rem] sm:w-[11rem] sm:h-[11rem] rounded-full bg-[#E4EFF0] flex items-center justify-center flex-shrink-0 absolute right-0 translate-x-[50%] z-[9]">
            <div className="w-[5rem] h-[5rem] sm:w-[8.5rem] sm:h-[8.5rem] bg-white rounded-full flex items-center justify-center">
              <div className="bg-[#FE705C] border border-white w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem] rounded-full flex items-center justify-center activeEntry-shadow">
                <h2 className=" text-sm sm:text-[1.5rem] font-extrabold text-white capitalize">
                  293
                </h2>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/images/entries/activeentry-effect.png"}
            width={492}
            height={357}
            className="w-full h-full absolute inset-0 rounded-[1.5rem]"
            alt="active-effect"
          />
        </div>
      </div>
      <div className="col-span-1">
        <Image
          src={"/assets/images/settings/MainCar.svg"}
          width={492}
          height={357}
          className="w-full p-2"
          alt="mini car"
        />
      </div>
    </div>
  );
};

export default ActiveEntries;
