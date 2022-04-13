import { Request, Response } from "express";
import { UpdateTransactionService } from "../services/UpdateTransactionService";

class UpdateTransactionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { date, description, amount, category, user_id } = request.body;

    const service = new UpdateTransactionService();

    const result = await service.execute({
      id,
      date,
      description,
      amount,
      category,
      user_id,
    });

    return response.json(result);
  }
}

export { UpdateTransactionController };
