import Image from "next/image";

const Inactive = () => {
  return (
    <div className="h-[5.5rem] sm:h-[4rem] rounded-[1.5rem] bg-[#FBEFEF] relative  px-[1.5rem] py-[2.5rem] w-[80%] flex items-center justify-start mb-[5rem]">
      <div className="flex items-center gap-3 sm:gap-[1.5rem] w-full h-full z-[99]">
        <div className="bg-[#EE391C] w-[0.3125rem] h-full min-h-[2.5rem] rounded-[1.5rem]"></div>
        <div className="flex flex-col items-start justify-center h-full mt-1">
          <h4 className="text-[0.875rem] sm:text-[1rem] leading-[1.37806rem] text-[#EE391C] font-medium capitalize">
            Your subscription is currently inactive
          </h4>
        </div>
      </div>

      <Image
        src={"/assets/images/alerts/effect.png"}
        width={492}
        height={357}
        className="w-full h-full absolute inset-0 rounded-[1.5rem] object-fill"
        alt="active-effect"
      />
    </div>
  );
};

export default Inactive;
