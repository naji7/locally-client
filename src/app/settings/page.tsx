import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import SettingsContent from "@/components/pages/settings/settingsContent";

const Settings = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="Settings" subtitle="" />
        <SettingsContent/>
      </div>
    </div>
  );
}
export default Settings