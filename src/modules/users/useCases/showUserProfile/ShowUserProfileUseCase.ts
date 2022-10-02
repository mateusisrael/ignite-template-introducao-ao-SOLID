import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userFinded = this.usersRepository.findById(user_id);
    if (!userFinded) throw new Error("Usuário não encontrado");
    return userFinded;
  }
}

export { ShowUserProfileUseCase };
