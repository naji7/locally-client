"use client";

import { TabsContent } from "../subscription/tabsContent";

import Slider from "@/components/sliders/slider";
import { useEffect, useState } from "react";
import { getAllSubscriptionsApi } from "@/clientApi/auth";
import { useMembership } from "@/providers/membershipProvider";
import SubscriptionCard from "@/components/cards/subscriptionCard";

export default function RegisterTabs() {
  const [subscriptions, setSubscriptions] = useState<any>([]);

  const fetchAllSubscription = async () => {
    try {
      const subsResponse = await getAllSubscriptionsApi();
      if (subsResponse) {
        setSubscriptions(subsResponse?.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllSubscription();
  }, []);

  const tabs = [
    {
      title: "monthly",
      offer: "",
      value: "monthly",
      content: (
        <div className="w-full flex grid-cols-5  gap-[1.2rem] overflow-scroll">
          <Subscription subscriptions={subscriptions} value="monthly" />
        </div>
      ),
    },
    {
      title: "quartly",
      offer: "(save 10%)",
      value: "quartly",
      content: (
        <div className="w-full flex grid-cols-5  gap-[1.2rem] overflow-scroll">
          <Subscription subscriptions={subscriptions} value="quartly" />
        </div>
      ),
    },
    {
      title: "yearly ",
      offer: "(save 20%)",
      value: "yearly",
      content: (
        <div className="w-full flex grid-cols-5  gap-[1.2rem] overflow-scroll">
          <Subscription subscriptions={subscriptions} value="yearly" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start z-[99]">
      {subscriptions.length > 0 && <TabsContent tabs={tabs} />}
    </div>
  );
}
const Subscription = ({ subscriptions }: any) => {
  const { setSelectedPlan }: any = useMembership();

  const handleClick = (data: any) => {
    setSelectedPlan(data);
  };

  return (
    <>
      <Slider options={{ align: "start" }}>
        {subscriptions.length > 0 &&
          subscriptions.map((item: any, index: any) => (
            <SubscriptionCard
              key={index}
              item={item}
              index={index}
              handleClick={handleClick}
            />
          ))}
      </Slider>
    </>
  );
};
