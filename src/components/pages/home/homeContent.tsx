import { ImagesSlider } from "./imageSlider/imageSlider";
import Upcoming from "../../sliders/upcoming/upcoming";
import EarningBalance from "@/components/cards/earningBalance";
import Previous from "../../sliders/previous/previous";
import HomeEffect from "@/components/effects/homeEffect";

export default function HomeContent() {
  return (
    <div className="flex flex-col pl-[1.25rem] xl:pl-[16.75rem] pr-[1.25rem] py-[2rem] w-full gap-[2.5rem]">
      <HomeEffect />
      <div className="grid grid-cols-7 items-center gap-[1rem]">
        <div className="flex balance-card col-span-7 lg:col-span-3 rounded-[1rem] min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem] px-[0.75rem] py-4  items-end h-full relative">
          <EarningBalance />
        </div>
        <div className="flex col-span-7 lg:col-span-4 min-h-[20rem] sm:min-h-[28rem] sm:max-h-[28rem]">
          <ImagesSlider />
        </div>
      </div>
      <Upcoming title="Giveaways" />
      <Previous title="Winners" />
    </div>
  );
}
