import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root")!)?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// TODO
// const TOKEN: string = currentUser?.accessToken;
// const TOKEN: string =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzgyN2FjZWZmYjc1ZjIxOGE1NGJiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1ODAxNiwiZXhwIjoxNjQ4MzE3MjE2fQ.LhfRdKbvaHtdjZ115_wxZr2P6570JGGzpm1NgY11qr8";
const TOKEN: string = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")!).user
).currentUser.accessToken;
// const TOKEN = "";

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")!).user).currentUser
//     .accessToken
// );

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")!).user).currentUser
//     .isAdmin
// );
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
