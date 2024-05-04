"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AUTH_TOKEN } from "@/constants";
import { setToken } from "@/services/axios";
import { authenticateUserApi } from "@/clientApi/auth";

const UserContext = createContext(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; fullName: string }>();
  const [isMainLoading, setIsMainLoading] = useState<boolean>(false);
  const [subscription, setSubscription] = useState();
  const [subscriptionPlan, setSubscriptionPlan] = useState();

  // const [authenticate, { data, error }] = useAuthenticateUserMutation();
  const [status, setStatus] = useState("idle");

  const handleAuthentication = async () => {
    setIsMainLoading(true);
    const auth = localStorage.getItem(AUTH_TOKEN) || "";
    setToken(auth);
    if (auth) {
      try {
        const res = await authenticateUserApi();
        if (res) {
          // setUser(res?.data?.user);
          setUser({
            email: res.data.user.email,
            fullName: res.data.user.fullName,
          });
          setSubscription(res.data.user.subsciption[0]);
          setSubscriptionPlan(res.data.user.subscriptionPlan);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.log("error : ", error);
        setStatus("failed");
        router.push("/login");
      }
    } else {
      router.push("/login");
    }

    setIsMainLoading(false);
  };
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN) || "";
    setToken(token);
    if (token) {
      ///api/authenticate if user
      handleAuthentication();
    } else {
      setStatus("failed");
    }
  }, []);

  return (
    <UserContext.Provider
      value={
        {
          user,
          isAuthenticated: !!user,
          handleAuthentication,
          isMainLoading,
          subscription,
          subscriptionPlan,
        } as any
      }
    >
      {children}
    </UserContext.Provider>
  );
};
