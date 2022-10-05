import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui

    try {
      const usersList = this.listAllUsersUseCase.execute({
        user_id: request.headers.user_id?.toString(),
      });

      return response.status(200).json(usersList);
    } catch (error) {
      if (
        error.toString() ===
          "Error: O usuário não tem permissão para executar essa tarefa" ||
        error.toString() === "Error: Usuário inexistente"
      )
        return response.status(400).json({ error: error.toString() });
      return response.sendStatus(500);
    }
  }
}

export { ListAllUsersController };
