import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  "Content-type": "application/json",
  Accept: "application/json",
  // withCredentials: true,
  method: "*",
});

export default api;
