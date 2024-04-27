import Navbar from "@/components/navbar/navbar";
import HomeContent from "@/components/pages/home/homeContent";
import SideBar from "@/components/sidebar/sidebar";

const Home = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="welcome back !" subtitle="Mohammad Reza" />
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
