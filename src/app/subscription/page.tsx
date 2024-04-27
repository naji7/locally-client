import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import SubscriptionContent from "@/components/pages/subscription/subscriptionContent";
import SubscribeSuccessful from "@/components/alerts/subscribeSuccessful";

const Subscription = () => {
  return (
    <>
      <div className="flex h-screen overflow-y-scroll">
        <SideBar />
        <div className="flex flex-col h-full justify-start w-full relative">
          <Navbar title="subscription" subtitle="" />
          <SubscriptionContent />
        </div>
      </div>
    </>
  );
};

export default Subscription;
