import Navbar from "@/components/navbar/navbar";
import SettingsForm from "@/components/forms/settingsForm";
import SideBar from "@/components/sidebar/sidebar";
import SettingsContent from "@/components/pages/settings/settingsContent";

export default function settings() {
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
