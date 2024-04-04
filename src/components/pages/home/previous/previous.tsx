import { previousdata } from "@/constants/data";
import Slider from "@/components/slider/slider";
import { HomePrevious } from "@/components/cards/homePrevious";

export default function Previous() {
  return (
    <div className="flex flex-col gap-[2.75rem]">
      <h3 className="text-[1.5rem] font-normal capitalize">
        Previous <span className="font-black">Winners</span>
      </h3>
      <div className="flex overflow-x-scroll items-center gap-[0.75rem]">
        <Slider options={{ align: "start" }}>
          {previousdata.map((testimonial, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] md:flex-[0_0_49%]  2xl:flex-[0_0_32.5%] flex p-[0.75rem]  bg-white border border-black/10 rounded-[1rem] h-full min-h-[9.375rem] max-h-[9.375rem]  gap-[0.75rem]"
            >
              <HomePrevious {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
