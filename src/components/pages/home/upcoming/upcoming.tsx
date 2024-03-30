import Slider from "@/components/slider/slider";
import { upcomingdata } from "@/constants/data";
import HomeUpcoming from "@/components/cards/homeUpcoming";

export default function Upcoming() {
  return (
    <div className="flex flex-col gap-[2.75rem]">
      <h3 className="text-[1.5rem] font-normal capitalize">
        Upcoming <span className="font-black">Giveaways</span>
      </h3>
      <div className="flex overflow-x-scroll items-center gap-[0.75rem]">
        <Slider options={{ align: "start" }}>
          {upcomingdata.map((testimonial, i) => (
            <div
              key={i}
              className="sm:flex-[0_0_49%] lg:flex-[0_0_33%] 2xl:flex-[0_0_24%] flex flex-col px-[0.75rem] pt-[0.75rem] pb-[1rem] bg-white border border-black/10 rounded-[1rem] justify-between h-full min-h-[21rem] max-h-[21rem] flex-[0_0_100%]"
            >
              <HomeUpcoming {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
