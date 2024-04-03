import Navbar from "@/components/navbar/navbar";
import SettingsForm from "@/components/settingsForm/settingsForm";
import SideBar from "@/components/sidebar/sidebar";

export default function settings() {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="subscription" subtitle="" />
        <SettingsForm />
      </div>
    </div>
  );
}
