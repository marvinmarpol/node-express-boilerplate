import { ENV } from "../config/env";
import { IUserRepository } from "../domain/user/user.interface";
import { InMemoryUserRepository } from "../domain/user/adapter/user.inmemory.repository";

export class container {
  public userRepository: IUserRepository;

  constructor() {
    this.userRepository = new InMemoryUserRepository();

    if (ENV.DB_DRIVER == "postgres") {
      // postgre injector here
    } else if (ENV.DB_DRIVER == "mongo") {
      // mongo injector here
    }
  }
}
