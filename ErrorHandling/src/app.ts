import express, { Application, Request, Response } from "express";
import router from "./user/user.controller";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router)

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "API is running" });
});

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});