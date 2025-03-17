import axios from "axios";
import { store } from "../redux/store";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_BASE_API_URL,
});

axiosInstance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    const state = store.getState();
    const token = state.auth.access_Token;

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
