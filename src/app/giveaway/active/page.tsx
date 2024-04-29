import MainHeader from "@/components/headers/mainHeader/mainHeader";
import ActiveContent from "@/components/pages/giveaway/active/activeContent";

const Active = () => {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="active giveaways" subtitle=""/>

      <ActiveContent />
    </div>
  );
};

export default Active;
