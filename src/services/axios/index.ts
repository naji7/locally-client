import { AUTH_TOKEN, BASE_URL } from "@/constants";
import axios from "axios";

function getAccessToken() {
  return localStorage.getItem(AUTH_TOKEN);
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api",
  withCredentials: true,
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common = { authorization: `Bearer ${token}` };
};
