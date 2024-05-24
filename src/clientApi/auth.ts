import { axiosInstance } from "@/services/axios";

export const loginApi = async (formData: any) => {
  const res = await axiosInstance(`/login`, {
    method: "POST",
    data: formData,
  });
  return res;
};

export const authenticateUserApi = async () => {
  const res = await axiosInstance(`/authenticate`, {
    method: "GET",
  });

  return res;
};

export const getStoreProductsApi = async (formData: any) => {
  const res = await axiosInstance(`/getStoreProducts`, {
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

export const addProductApi = async (formData: any) => {
  const res = await axiosInstance("/products", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const createStoreApi = async (formData: any) => {
  const res = await axiosInstance("/store", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const getAllProductsApi = async () => {
  const res = await axiosInstance(`/products`, {
    method: "GET",
  });

  return res;
};
