"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";

const MainHeader = ({ title, subtitle }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <SideBar show={isSidebarOpen} setter={toggleSidebar} />
      <Navbar title={title} subtitle={subtitle} setter={toggleSidebar} />
    </>
  );
};

export default MainHeader;
