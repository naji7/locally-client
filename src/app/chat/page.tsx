import MainHeader from "@/components/headers/mainHeader/mainHeader";
import ChatContent from "@/components/pages/chat/chatContent";
import React from "react";

const Chat = () => {
  return (
   
      <div className="flex h-screen flex-col overflow-y-scroll relative">
      <MainHeader title="Chat Room"  />
      <ChatContent />
    </div>
  );
};

export default Chat;
