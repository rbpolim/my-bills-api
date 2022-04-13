import { Request, Response } from "express";

import { DeleteTransactionService } from "../services/DeleteTransactionService";

class DeleteTransactionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteTransactionService();

    await service.execute(id);

    return response.status(204).send();
  }
}

export { DeleteTransactionController };
