"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useMembership } from "@/providers/membershipProvider";

type Tab = {
  title: string;
  value: string;
  offer: string;
  content?: string | React.ReactNode | any;
};

export const TabsContent = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const { setDurationType }: any = useMembership();

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);

    setDurationType(newTabs[0].value);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  // const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col md:flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full md:max-w-[44rem] w-full mx-auto",
          containerClassName
        )}
      >
        <div className="bg-[#F5F5F5]  flex flex-row py-[0.7rem] px-[0.4rem] md:px-[0.85rem] rounded-[1.5rem] md:rounded-[4.3125rem] gap-[1rem] w-full justify-between">
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              // onMouseEnter={() => setHovering(true)}
              // onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-[1rem] md:px-[3rem] py-2 md:py-4 rounded-full",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 rounded-[1rem] md:rounded-[5.625rem] bg-black !text-white",
                    activeTabClassName
                  )}
                />
              )}

              {active.value === tab.value ? (
                <div className="flex items-center flex-col sm:flex-row justify-center gap-2 text-sm">
                  <span
                    className={cn(
                      "relative block capitalize text-white text-xs md:text-sm font-medium"
                    )}
                  >
                    {tab.title}
                  </span>
                  <span className=" capitalize text-xs md:text-sm text-[#EE391C] z-[9]">
                    {tab.offer}
                  </span>
                </div>
              ) : (
                <div className="flex items-center flex-col sm:flex-row justify-center gap-2 text-sm">
                  <span className="relative flex items-center capitalize text-black text-xs md:text-sm">
                    {tab.title}
                  </span>
                  <span className=" capitalize text-[#EE391C] text-xs md:text-sm">
                    {tab.offer}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        // hovering={hovering}
        className={cn("mt-[4.5rem] mb-12", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 ",
            className,
            isActive(tab) ? "visible" : "invisible"
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
