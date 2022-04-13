import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";

export const usersRouter = Router();

usersRouter.post("/create", new CreateUserController().handle);
