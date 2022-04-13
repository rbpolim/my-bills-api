import { Request, Response } from "express";

import { CreateTransactionService } from "../services/CreateTransactionService";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { date, description, amount, category, user_id } = request.body;

    const service = new CreateTransactionService();

    const result = await service.execute({
      date,
      description,
      amount,
      category,
      user_id,
    });

    return response.json(result);
  }
}

export { CreateTransactionController };
