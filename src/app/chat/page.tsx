import Navbar from "@/components/navbar/navbar";
import ChatContent from "@/components/pages/chat/chatContent";
import SettingsContent from "@/components/pages/settings/settingsContent";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function chat() {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="Chat Room" subtitle="" />
        <ChatContent />
      </div>
    </div>
  );
}

export default chat;
