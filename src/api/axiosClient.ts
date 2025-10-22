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
    console.log("Hello.....");
    return response.data;
  },
  async (error) => {
    console.log("Response Error................");
    return Promise.reject(error);
  }
);
