"use client";

import { TabsContent } from "./tabsContent";
import { CheckIcon } from "@heroicons/react/24/outline";
import { planDetails } from "@/constants/data";
import { useEffect, useState } from "react";
import { getAllSubscriptionsApi } from "@/clientApi/auth";
import { useMembership } from "@/providers/membershipProvider";
import SubscriptionCard from "@/components/cards/subscriptionCard";
import { useUser } from "@/providers/UserProvider";

export default function SubscriptionTabs() {
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Subscription subscriptions={subscriptions} value="monthly" />
        </div>
      ),
    },
    {
      title: "quartly",
      offer: "(save 10%)",
      value: "quartly",
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Subscription subscriptions={subscriptions} value="quartly" />
        </div>
      ),
    },
    {
      title: "yearly ",
      offer: "(save 20%)",
      value: "yearly",
      content: (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
          <Subscription subscriptions={subscriptions} value="yearly" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[140rem] md:h-[85rem] lg:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      {subscriptions.length > 0 && <TabsContent tabs={tabs} />}
    </div>
  );
}

const Subscription = ({ subscriptions }: any) => {
  const { subscriptionPlan }: any = useUser();

  const handleClick = (data: any) => {
    // setSelectedPlan(data);
    console.log("haiii");
  };

  return (
    <>
      {subscriptions.length > 0 &&
        subscriptions.map((item: any, index: any) => (
          <SubscriptionCard
            key={index}
            item={item}
            index={index}
            selectedPlan={subscriptionPlan}
            handleClick={handleClick}
            isDashboard
          />
        ))}
    </>
  );
};
