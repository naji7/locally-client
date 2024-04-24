import Navbar from "@/components/navbar/navbar";
import AffiliateContent from "@/components/pages/affiliate/affiliateContent";
import SideBar from "@/components/sidebar/sidebar";

const Affiliate = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="affiliate" subtitle="" />
        <AffiliateContent/>
      </div>
    </div>
  );
};

export default Affiliate;
