import HomeEffect from "@/components/effects/homeEffect";
import Navbar from "@/components/navbar/navbar";
import PastContent from "@/components/pages/giveaway/past/pastContent";
import SideBar from "@/components/sidebar/sidebar";

const Past = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <HomeEffect/>
        <Navbar title="upcoming giveaways" subtitle="" />
        <PastContent />
      </div>
    </div>
  );
};

export default Past;
