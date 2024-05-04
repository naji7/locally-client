"use client";

import MainHeader from "@/components/headers/mainHeader/mainHeader";
import HomeContent from "@/components/pages/home/homeContent";
import { useUser } from "@/providers/UserProvider";

const Home = () => {
  const { user, isMainLoading }: any = useUser();
  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="welcome back !" subtitle={user && user?.fullName} />
      <HomeContent />
    </div>
  );
};

export default Home;
