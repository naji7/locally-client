import ActiveEntries from "./activeEntries/activeEntries";
import ActiveEntry from "@/components/cards/activeEntry";
import { activentrydata } from "@/constants/data";
import HomeEffect from "@/components/effects/homeEffect";

const EntriesContent = () => {
  return (
    <div className="flex flex-col items-center  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect/>
      <ActiveEntries />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-[1.25rem]">
        {activentrydata.map((data, i) => (
          <ActiveEntry key={i} {...data} />
        ))}
      </div>
    </div>
  );
};

export default EntriesContent;
