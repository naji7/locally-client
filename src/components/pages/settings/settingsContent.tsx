import SettingsForm from "@/components/forms/settingsForm"
import Withdraw from "@/components/settingsForm/withdraw"


const SettingsContent = () => {
  return (
    <div className="flex flex-col items-center  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
          <Withdraw />
          <SettingsForm/>
    </div>
  )
}

export default SettingsContent