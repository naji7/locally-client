import HomeEffect from "@/components/effects/homeEffect";
import Navbar from "@/components/navbar/navbar";
import UpcomingContent from "@/components/pages/giveaway/upcoming/upcomingContent";
import SideBar from "@/components/sidebar/sidebar";


const Upcoming = () => {
    return (
        <div className="flex h-screen overflow-y-scroll">
          <SideBar />
          <div className="flex flex-col h-full justify-start w-full relative">
            <HomeEffect/>
            <Navbar title="upcoming giveaways" subtitle="" />
            <UpcomingContent/>
          </div>
        </div>
      );
}

export default Upcoming