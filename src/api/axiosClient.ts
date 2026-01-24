import axios, { type AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((request) => {
  return request;
});

api.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  },
);
