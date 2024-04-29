import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import BusinessContent from "@/components/pages/businessCard/businessContent";
import SideBar from "@/components/sidebar/sidebar";

export default function businessCard() {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="Business Card" subtitle="" />
    //     <BusinessContent/>
    //   </div>
    // </div>
         <div className="flex h-screen flex-col overflow-y-scroll relative">
         <MainHeader title="Business Card"  />
         <BusinessContent />
       </div>
    
  );
}
