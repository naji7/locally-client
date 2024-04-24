import ChatForm from "@/components/pages/chat/chatForm";
import React from "react";
import Groups from "./groups";
import Messages from "./messages";

function ChatContent() {
  return (
    <div className="flex   items-center justify-center w-full  xl:pl-[15.5rem]  py-[2rem] ">
      <div className="flex items-center justify-center w-1/4 h-screen border-r relative">
        <Groups />
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 h-screen  border-r relative">
        <ChatForm />
        <Messages/>
      </div>

    </div>
  );
}

export default ChatContent;
