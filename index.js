import express from "express";
import { userRouter } from ".//users/users.js";

const port = 8000;
const app = express();

userRouter.use((res, req, next) => {
  console.log("Обработчик users ");
  next();
});
app.use((res, req, next) => {
  console.log("Время ", Date.now());
  next();
});

app.get("/hello", (req, res) => {
  // res.send('Привет!');
  res.end();
});

app.use("/users", userRouter);

app.use((err, res, req, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${port} пору`);
});
