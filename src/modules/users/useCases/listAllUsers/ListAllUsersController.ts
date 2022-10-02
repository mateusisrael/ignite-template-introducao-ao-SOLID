import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui

    try {
      const usersList = this.listAllUsersUseCase.execute({
        user_id: request.headers.id.toString(),
      });

      return response.status(200).json(usersList);
    } catch (error) {
      console.log("ERROR", error);
      return response.status(400).json(error);
    }
  }
}

export { ListAllUsersController };
