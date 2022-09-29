import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    if (!user) throw new Error("Usuário inexistente");
    if (!user.admin) throw new Error("O usuário não tem permissão para executar essa tarefa");
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
