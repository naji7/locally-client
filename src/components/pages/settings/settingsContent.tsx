import SettingsForm from "@/components/forms/settingsForm";
import Withdraw from "@/components/pages/settings/withdraw/withdraw";
import Image from "next/image";

const SettingsContent = () => {
  return (
    <div className="flex flex-col items-center  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <Image
        src={"/assets/images/home/effect.svg"}
        alt="effect"
        className="w-auto h-auto absolute top-0 left-[30%]"
        width={1000}
        height={1000}
      />
      <Withdraw />
      <SettingsForm />
    </div>
  );
};

export default SettingsContent;
