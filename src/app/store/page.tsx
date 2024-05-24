"use client";

import MainHeader from "@/components/headers/mainHeader/mainHeader";
import Navbar from "@/components/navbar/navbar";
import CreateStore from "@/components/pages/store/createStore";
import StoreContent from "@/components/pages/store/storeContent";

import SideBar from "@/components/sidebar/sidebar";
import { useUser } from "@/providers/UserProvider";
import { useState } from "react";

const Store = () => {
  const { user }: any = useUser();
  // const [isStoreCreated, setStoreCreated] = useState(
  //   user?.store ? true : false
  // );

  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Store" />

      {user && user?.store ? <StoreContent /> : <CreateStore />}
    </div>
  );
};

export default Store;
