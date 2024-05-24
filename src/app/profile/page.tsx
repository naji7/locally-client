import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import CreateStore from "@/components/pages/store/createStore";
import StoreContent from "@/components/pages/store/storeContent";
import CreateProfile from "@/components/profile/createProfile";

import SideBar from "@/components/sidebar/sidebar";

const Profile = () => {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Profile" />
      <CreateProfile />
    </div>
  );
};

export default Profile;
