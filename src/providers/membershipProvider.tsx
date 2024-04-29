"use client";

import React, { createContext, useContext, useState } from "react";

const MembershipContext = createContext(undefined);

export const useMembership = () => {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error("useMembership must be used within a MembershipProvider");
  }
  return context;
};

export const MembershipProvider = ({ children }: any) => {
  const [membershipType, setMembershipType] = useState<string>("subscription");
  const [selectedPlan, setSelectedPlan] = useState<object>({});
  const [durationType, setDurationType] = useState<string>("monthly");

  return (
    <MembershipContext.Provider
      value={
        {
          membershipType,
          selectedPlan,
          durationType,
          setMembershipType,
          setSelectedPlan,
          setDurationType,
        } as any
      }
    >
      {children}
    </MembershipContext.Provider>
  );
};
