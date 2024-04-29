import MainHeader from "@/components/headers/mainHeader/mainHeader";
import ChatContent from "@/components/pages/chat/chatContent";
import React from "react";

function chat() {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="Chat Room" subtitle="" />
    //     <ChatContent />
    //   </div>
    // </div>
      <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Chat Room"  />
      <ChatContent />
    </div>
  );
}

export default chat;
