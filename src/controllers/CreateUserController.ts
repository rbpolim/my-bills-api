import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const service = new CreateUserService();

    const user = await service.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}

export { CreateUserController };
