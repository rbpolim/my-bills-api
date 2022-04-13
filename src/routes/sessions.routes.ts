import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

export const sessionsRouter = Router();

sessionsRouter.post("/", new AuthenticateUserController().handle);
