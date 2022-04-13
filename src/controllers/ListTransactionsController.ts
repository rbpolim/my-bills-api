import { Request, Response } from "express";

import { ListTransactionsService } from "../services/ListTransactionsService";

class ListTransactionsController {
  async handle(request: Request, response: Response) {
    const service = new ListTransactionsService();

    const transactions = await service.execute();

    return response.json(transactions);
  }
}

export { ListTransactionsController };
