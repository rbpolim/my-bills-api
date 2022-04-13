import { hash } from "bcryptjs";

import prismaClient from "../prisma";
import { User } from ".prisma/client";

import { AppError } from "../errors/AppErrors";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError("Email address already used");
    }

    const passwordHashed = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHashed,
      },
    });

    return user;
  }
}

export { CreateUserService };
