import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import EntriesContent from "@/components/pages/entries/entriesContent";
import SideBar from "@/components/sidebar/sidebar";

const Entries = () => {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="my entries" subtitle="" />
    //     <EntriesContent/>
    //   </div>
    // </div>

    <div className="flex h-screen flex-col overflow-y-scroll relative">
    <MainHeader title="My Entries"  />
    <EntriesContent />
  </div>

  );
};

export default Entries;
