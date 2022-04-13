import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new AuthenticateUserService();

    const { user, token } = await service.execute({ email, password });

    delete user.password;

    return response.json({ user, token });
  }
}

export { AuthenticateUserController };
