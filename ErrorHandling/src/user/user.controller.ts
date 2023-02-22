import { Request, Response, Router } from "express";
import { httpCode } from "../enum/http-status-code.enum";
import { Api404Error } from "../error/api-404-error";
import { UserService } from "./user.service";

const router = Router();
const user = new UserService();

router.post("/users", async (req: Request, res: Response) => {
  try {
    user.createUser(req.body);
    res.status(httpCode.OK);
  } catch (error) {
    res.status(httpCode.NOT_FOUND);
    console.error(error);
  }
});

router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = user.getUser(req.params.id);

    if (result === undefined) {
      throw new Api404Error(`User with id: ${req.params.id} not found.`);
    }

    res.json(result);
  } catch (error) {
    res.status(httpCode.OK);
    console.error(error);
  }
});

router.get("/users/", async (req: Request, res: Response) => {
  try {
    const result = user.getAllUsers();
    res.json(result);
    res.status(httpCode.OK);
  } catch (error) {
    res.status(httpCode.OK);
    console.error(error);
  }
});

export default router;
