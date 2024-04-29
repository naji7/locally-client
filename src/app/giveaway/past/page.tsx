import HomeEffect from "@/components/effects/homeEffect";
import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import PastContent from "@/components/pages/giveaway/past/pastContent";
import SideBar from "@/components/sidebar/sidebar";

const Past = () => {
  return (
 
    <div className="flex h-screen flex-col overflow-y-scroll relative">
    <MainHeader title="active giveaways" subtitle=""/>

    <PastContent />
  </div>
  );
};

export default Past;
