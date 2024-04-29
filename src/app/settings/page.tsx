
import SettingsContent from "@/components/pages/settings/settingsContent";
import MainHeader from "@/components/headers/mainHeader/mainHeader";

const Settings = () => {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="Settings" subtitle="" />
    //     <SettingsContent/>
    //   </div>
    // </div>
      <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Settings"  />
      <SettingsContent />
    </div>
  );
}
export default Settings