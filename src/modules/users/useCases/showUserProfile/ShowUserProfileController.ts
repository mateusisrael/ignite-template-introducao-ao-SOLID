import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const userProfile = this.showUserProfileUseCase.execute({
        user_id: request.params.user_id,
      });
      return response.status(200).json(userProfile);
    } catch (error) {
      if (error.toString() === "Error: Usuário não encontrado")
        return response.status(404).json({ error: error.toString() });
      return response.sendStatus(500);
    }
  }
}

export { ShowUserProfileController };
