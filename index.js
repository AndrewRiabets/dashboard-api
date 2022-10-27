import express from "express";

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log(`Сервер запущен на ${port} пору`);
});

app.get("/hello", (res, req) => {
  res.send("Hello!");
});
