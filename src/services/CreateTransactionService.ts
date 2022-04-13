import prismaClient from "../prisma/index";
import { Transaction } from ".prisma/client";

interface IRequest {
  date: Date;
  description: string;
  amount: number;
  category: string;
  user_id: string;
}

class CreateTransactionService {
  async execute({
    date,
    description,
    amount,
    category,
    user_id,
  }: IRequest): Promise<Transaction> {
    const transaction = await prismaClient.transaction.create({
      data: {
        date,
        description,
        amount,
        category,
        user_id,
      },
      include: {
        user: true,
      },
    });

    return transaction;
  }
}

export { CreateTransactionService };
