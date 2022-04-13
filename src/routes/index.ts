import { Router } from "express";

import { usersRouter } from "./users.routes";
import { transactionsRouter } from "./transactions.routes";
import { sessionsRouter } from "./sessions.routes";

export const router = Router();

router.use("/users", usersRouter);
router.use("/transactions", transactionsRouter);
router.use("/sessions", sessionsRouter);
