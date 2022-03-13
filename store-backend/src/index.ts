import express from "express";

const app = express();
const port = process.env.EXPRESS_PORT || "3002";

app.listen(port, () => {
  let listApp = `App listening on port ${port}! (http://localhost:${port})`;
  return console.log(listApp);
});
