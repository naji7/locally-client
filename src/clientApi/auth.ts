import { axiosInstance } from "@/services/axios";

export const loginApi = async (formData: any) => {
  const res = await axiosInstance(`/login`, {
    method: "POST",
    data: formData,
  });
  return res;
};

export const registerUserApi = async (formData: any) => {
  const res = await axiosInstance("/register", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const getAllSubscriptionsApi = async () => {
  const res = await axiosInstance(`/subscription`, {
    method: "GET",
  });
  return res;
};

export const sendOTPApi = async (email: any) => {
  const res = await axiosInstance("/sendOtp", {
    method: "POST",
    data: email,
  });
  return res;
};

export const verifyOTPApi = async (formData: any) => {
  const res = await axiosInstance("/verifyOtp", {
    method: "POST",
    data: formData,
  });
  return res;
};
