import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/interface", // 👈 change to your backend
});

// Optional: add auth token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
