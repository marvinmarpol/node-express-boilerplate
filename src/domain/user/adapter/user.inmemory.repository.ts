/* If later we add a PostgresUserRepository, our service layer stays the same 
We can swap implementations easily.
This demonstrates Open/Closed Principle. */

import { IUserRepository } from "../user.interface";
import { User } from "../user.model";

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [
    new User(1, "Alice", "alice@example.com"),
    new User(2, "Bob", "bob@example.com"),
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
