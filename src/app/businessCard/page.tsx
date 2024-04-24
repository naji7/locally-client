import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
<<<<<<< Updated upstream
import BusinessCardContent from "@/components/pages/businesscard/businessCardContent";
=======
import BusinessCardContent from "@/components/pages/businessCard/businessCardContent";

>>>>>>> Stashed changes

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
