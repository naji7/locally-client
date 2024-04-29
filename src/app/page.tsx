import MainHeader from "@/components/headers/mainHeader/mainHeader";
import HomeContent from "@/components/pages/home/homeContent";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="welcome back !" subtitle="Mohammad Reza" />
      <HomeContent />
    </div>
  );
}
