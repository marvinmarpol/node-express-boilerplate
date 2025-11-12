import { Router } from "express";
import { InMemoryUserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    const repo = new InMemoryUserRepository();
    const service = new UserService(repo);
    const controller = new UserController(service);

    this.router.get("/users", controller.getUsers);
  }
}