
import SubscriptionContent from "@/components/pages/subscription/subscriptionContent";
import MainHeader from "@/components/headers/mainHeader/mainHeader";

const Subscription = () => {
  return (

    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="subscription"  />
      <SubscriptionContent />
    </div>
  );
};

export default Subscription;