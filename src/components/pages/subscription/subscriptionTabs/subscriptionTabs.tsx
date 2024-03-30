"use client";

import Image from "next/image";
import { TabsContent } from "./tabsContent";

export default function SubscriptionTabs() {
  const tabs = [
    {
      title: "monthly",
      offer: "",
      value: "monthly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>monthly</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "quartly",
      offer: "(save 10%)",
      value: "quartly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>quartly (save 10%)</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "yearly ",
      offer: "(save 20%)",
      value: "yearly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>yearly (save 20%)</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <TabsContent tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    // <Image
    //   src="/linear.webp"
    //   alt="dummy image"
    //   width="1000"
    //   height="1000"
    //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    // />
    <div className=""></div>
  );
};
