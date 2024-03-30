import Image from "next/image";
import { ImagesSlider } from "./imageSlider/imageSlider";
import Upcoming from "./upcoming/upcoming";
import EarningBalance from "@/components/cards/earningBalance";
import Previous from "./previous/previous";

export default function HomeContent() {
  return (
    <div className="flex flex-col pl-[1.25rem] xl:pl-[16.75rem] pr-[1.25rem] py-[2rem] w-full gap-[2.5rem]">
      <Image
        src={"/assets/images/home/effect.svg"}
        alt="effect"
        className="w-auto h-auto absolute top-0 left-[30%]"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-7 items-center gap-[1rem]">
        <div className="flex balance-card col-span-7 lg:col-span-3 rounded-[1rem] min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem] px-[0.75rem] py-4  items-end h-full relative">
          <EarningBalance />
        </div>
        <div className="flex col-span-7 lg:col-span-4 min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem]">
          <ImagesSlider />
        </div>
      </div>
      <Upcoming />
      <Previous/>
    </div>
  );
}
