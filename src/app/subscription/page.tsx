import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import SubscriptionContent from "@/components/pages/subscription/subscriptionContent";
import MainHeader from "@/components/headers/mainHeader/mainHeader";
import HomeContent from "@/components/pages/home/homeContent";

const Subscription = () => {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="subscription" subtitle="" />
    //     <SubscriptionContent />
    //   </div>
    // </div>

    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="subscription"  />
      <SubscriptionContent />
    </div>
  );
};

export default Subscription;
