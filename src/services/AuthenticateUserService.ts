import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import prismaClient from "../prisma";
import { User } from ".prisma/client";

import { AppError } from "../errors/AppErrors";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new AppError("Incorrect email/password combination", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email/password combination", 401);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d", 
    });

    return { user, token };
  }
}

export { AuthenticateUserService };
