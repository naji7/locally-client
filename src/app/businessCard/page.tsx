import Navbar from "@/components/navbar/navbar";
import BusinessContent from "@/components/pages/businessCard/businessContent";
import SideBar from "@/components/sidebar/sidebar";

const BusinessCard = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="Business Card" subtitle="" />
        <BusinessContent />
      </div>
    </div>
  );
};

export default BusinessCard;
