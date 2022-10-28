import express, {Request, Response, NextFunction} from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();


app.use((res, req, next) => {
  console.log("Время ", Date.now());
  next();
});

app.get("/hello", (req, res) => {
  // res.send('Привет!');
  res.end();
});

app.use("/users", userRouter);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${port} пору`);
});
