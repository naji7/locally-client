import MainHeader from "@/components/headers/mainHeader/mainHeader";
import BusinessContent from "@/components/pages/businessCard/businessContent";

const BusinessCard = () => {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Business Card" />
      <BusinessContent />
    </div>
  );
};

export default BusinessCard;
