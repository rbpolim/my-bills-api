import prismaClient from "../prisma";

import { AppError } from "../errors/AppErrors";

class DeleteTransactionService {
  async execute(id: string) {
    const checkTransactionExits = await prismaClient.transaction.findUnique({
      where: {
        id,
      },
    });

    if (!checkTransactionExits) {
      throw new AppError("Transaction does not found", 401);
    }

    await prismaClient.transaction.delete({
      where: {
        id,
      },
    });

    return;
  }
}

export { DeleteTransactionService };
