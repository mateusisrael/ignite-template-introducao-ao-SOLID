import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const userProfile = this.showUserProfileUseCase.execute({
        user_id: request.headers.id.toString(),
      });
      return response.status(200).json(userProfile);
    } catch (error) {
      return response.status(400).send();
    }
  }
}

export { ShowUserProfileController };
