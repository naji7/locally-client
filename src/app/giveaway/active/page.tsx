import HomeEffect from "@/components/effects/homeEffect";
import Navbar from "@/components/navbar/navbar";
import ActiveContent from "@/components/pages/giveaway/active/activeContent";
import SideBar from "@/components/sidebar/sidebar";

const Active = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <HomeEffect/>
        <Navbar title="active giveaways" subtitle="" />
        <ActiveContent />
      </div>
    </div>
  );
};

export default Active;
