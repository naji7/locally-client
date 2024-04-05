import Navbar from "@/components/navbar/navbar";
import EntriesContent from "@/components/pages/entries/entriesContent";
import SideBar from "@/components/sidebar/sidebar";

const Entries = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="my entries" subtitle="" />
        <EntriesContent/>
      </div>
    </div>
  );
};

export default Entries;
