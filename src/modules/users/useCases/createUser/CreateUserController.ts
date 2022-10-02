import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user = request.body;
      const userCreate = this.createUserUseCase.execute(user);
      return response.status(201).json(userCreate);
    } catch (error) {
      return response.status(204).send();
    }
  }
}

export { CreateUserController };
