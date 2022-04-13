import { AppError } from "../errors/AppErrors";
import prismaClient from "../prisma";

class UpdateTransactionService {
  async execute({ id, date, description, amount, category, user_id }) {
    const transaction = await prismaClient.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new AppError("Transaction does not exist.", 400);
    }

    if (transaction.user_id !== user_id) {
      throw new AppError("You can only update your own transactions.", 400);
    }

    const transactionUpdated = await prismaClient.transaction.update({
      where: {
        id,
      },
      data: {
        date: date,
        description: description,
        amount: amount,
        category: category,
      },
    });

    return transactionUpdated;
  }
}

export { UpdateTransactionService };
