import axios from "axios";

const BASE_URL = "https://gamer-store-webapp-backend.herokuapp.com/api/";
const TOKEN = "https://gamer-store-webapp-backend.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
