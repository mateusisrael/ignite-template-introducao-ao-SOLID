import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findByEmail(email);
    if (user) throw Error("Email não disponível");

    const userCreated = this.usersRepository.create({ name, email });

    return userCreated;
  }
}

export { CreateUserUseCase };
