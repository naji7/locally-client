import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import AffiliateContent from "@/components/pages/affiliate/affiliateContent";
import SideBar from "@/components/sidebar/sidebar";

const Affiliate = () => {
  return (
   
     <div className="flex h-screen flex-col overflow-y-scroll relative">
     <MainHeader title="Affiliate"  />
     <AffiliateContent />
   </div>
  );
};

export default Affiliate;
