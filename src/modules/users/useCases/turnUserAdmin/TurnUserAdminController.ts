import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: request.headers.id.toString(),
      });

      return response.send(200).json(user);
    } catch (error) {
      return response.send(400);
    }
  }
}

export { TurnUserAdminController };
