
import SettingsContent from "@/components/pages/settings/settingsContent";
import MainHeader from "@/components/headers/mainHeader/mainHeader";

const Settings = () => {
  return (

      <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Settings"  />
      <SettingsContent />
    </div>
  );
}
export default Settings