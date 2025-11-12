/* Interface Segregation & Dependency Inversion
we depend on abstractions, not implementations.
JS cannot enforce interfaces — this is a TypeScript-only benefit. */

import { User } from "./user.model";

export interface IUserRepository {
  findAll(): Promise<User[]>;
}
