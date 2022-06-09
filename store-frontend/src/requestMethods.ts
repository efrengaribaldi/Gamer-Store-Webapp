import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;
const TOKEN = process.env.BACKEND_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
