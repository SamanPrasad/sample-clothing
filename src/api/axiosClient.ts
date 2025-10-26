import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((request) => {
  return request;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
