import ChatForm from "@/components/pages/chat/chatForm";
import React from "react";
import Groups from "./groups";
import Messages from "./messages";
import GroupSidebar from "./groupSidebar/groupSidebar";

function ChatContent() {
  return (
    <div className="flex items-center justify-center w-full xl:pl-[15.5rem] pt-[2rem] h-full">
      <div className="flex w-full items-start divide-x h-full">
        <div className="w-[25rem] flex items-center flex-shrink-0 h-full">
          <GroupSidebar />
        </div>
        <div className="flex flex-col items-center justify-start w-full border-r relative">
          <ChatForm />
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
