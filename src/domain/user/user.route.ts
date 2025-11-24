import { Router } from "express";

import { container } from "../../core/container";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();

    const repo = new container().userRepository;
    const service = new UserService(repo);
    const controller = new UserController(service);

    this.router.get("/users", controller.getUsers);
  }
}
