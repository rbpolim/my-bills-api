import prismaClient from "../prisma";
import { Transaction } from ".prisma/client";

import { AppError } from "../errors/AppErrors";

class ListTransactionsService {
  async execute(): Promise<Transaction[]> {
    const transactions = await prismaClient.transaction.findMany();

    if (!transactions) {
      throw new AppError("Transactions was not found");
    }

    return transactions;
  }
}

export { ListTransactionsService };
