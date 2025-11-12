import { IUserRepository } from "./user.interface";
import { User } from "./user.model";

// Service layer follows Single Responsibility & Dependency Inversion
export class UserService {
  constructor(private repository: IUserRepository) {}

  async getAllUsers(): Promise<User[]> {
    const users = this.repository.findAll();
    // add other business logic here
    return users;
  }
}
