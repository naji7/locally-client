import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

const Business = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="business card" subtitle="" />
      </div>
    </div>
  );
};

export default Business;
