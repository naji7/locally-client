import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import BusinessCardContent from "@/components/pages/businesscard/businessCardContent";

export default function businessCard() {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="Business Card" subtitle="" />
        <BusinessCardContent/>
      </div>
    </div>
  );
}
