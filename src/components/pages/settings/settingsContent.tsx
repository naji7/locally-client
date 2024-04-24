import HomeEffect from "@/components/effects/homeEffect";
import SettingsForm from "@/components/forms/settingsForm";
import Withdraw from "@/components/pages/settings/withdraw/withdraw";
import Image from "next/image";

const SettingsContent = () => {
  return (
    <div className="flex flex-col items-center  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect/>
      <Withdraw />
      <SettingsForm />
    </div>
  );
};

export default SettingsContent;
