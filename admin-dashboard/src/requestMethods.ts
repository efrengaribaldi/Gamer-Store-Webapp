import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";

// const TOKEN: string =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzgyN2FjZWZmYjc1ZjIxOGE1NGJiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1ODAxNiwiZXhwIjoxNjQ4MzE3MjE2fQ.LhfRdKbvaHtdjZ115_wxZr2P6570JGGzpm1NgY11qr8";
let TOKEN = "";
if (localStorage.getItem("persist:root")) {
  const localCurrentUser = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")!).user!
  ).currentUser;
  TOKEN = localCurrentUser ? localCurrentUser.accessToken : "";
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
