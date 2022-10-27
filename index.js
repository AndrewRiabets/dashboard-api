import express from "express";

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log(`Сервер запущен на ${port} пору`);
});

app.get("/hello", (res, req) => {
  res.send("Hello!");
});

const cb = (req, res, next) => {
  console.log("CB");
  next();
};

app
  .route("/user")
  .get("/hello", (req, res) => {
    res.send("Привет!");
  })
  .post("/hello", (req, res) => {
    res.send("Привет!");
  });
