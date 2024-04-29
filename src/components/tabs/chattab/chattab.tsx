import { chatList } from "@/constants/data";
import { TabsHeader } from "../affiliate/tabsHeader";

export default function ChatTab() {
  const tabs = [
    { title: "Member", value: "Member" },
    { title: "Photos", value: "Photos" },
    { title: "Videos", value: "Videos" },
    { title: "Documents", value: "Documents" }
  ];

  return (
    <div className="h-[40rem] overflow-y-scroll [perspective:1000px] relative b flex mx-auto w-full  items-start justify-center">
      {/* <TabsHeader tabs={tabs} /> */}
      <ChatListContent />
    </div>
  );
}

const ChatListContent = () => {
  return (
    <ul className="flex flex-col w-full min-w-[32rem] max-w-[32rem] sm:max-w-[100%] overflow-scroll">
      {chatList.map((affiliate, index) => (
        <li
          key={index}
          className="grid grid-cols-4 items-center w-full transactionList relative py-[1rem] md:py-[1.4rem] border-b pl-4 sm:pl-[1.75rem] rounded-[0.25rem]"
        >
          <h4 className="font-normal text-xs sm:text-sm  capitalize">
            {affiliate.member}
          </h4>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-normal capitalize text-nowrap">
            {affiliate.photos}
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-normal capitalize ">
            {affiliate.videos}
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-normal capitalize ">
            {affiliate.doc}
          </div>
        </li>
      ))}
    </ul>
  );
};
