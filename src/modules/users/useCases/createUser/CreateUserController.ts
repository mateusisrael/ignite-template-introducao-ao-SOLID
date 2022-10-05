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
      if (error.toString() === "Error: Email não disponível")
        return response.status(400).json({
          error: "Error: Email não disponível",
        });

      return response.sendStatus(500);
    }
  }
}

export { CreateUserController };
