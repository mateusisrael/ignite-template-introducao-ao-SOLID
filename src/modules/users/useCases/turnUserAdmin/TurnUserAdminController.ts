import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: request.params.user_id.toString(),
      });

      return response.status(200).json(user);
    } catch (error) {
      if (error.toString() === "Error: Usuário inexistente")
        return response.status(404).json({ error });
      return response.sendStatus(500);
    }
  }
}

export { TurnUserAdminController };
