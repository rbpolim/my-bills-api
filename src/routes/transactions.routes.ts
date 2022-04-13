import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateTransactionController } from "../controllers/CreateTransactionController";
import { ListTransactionsController } from "../controllers/ListTransactionsController";
import { DeleteTransactionController } from "../controllers/DeleteTransactionController";
import { UpdateTransactionController } from "../controllers/UpdateTransactionController";

export const transactionsRouter = Router();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.get("/", new ListTransactionsController().handle);

transactionsRouter.post("/create", new CreateTransactionController().handle);

transactionsRouter.delete("/:id", new DeleteTransactionController().handle);

transactionsRouter.put("/:id", new UpdateTransactionController().handle);
