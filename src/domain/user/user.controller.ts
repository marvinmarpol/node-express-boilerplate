import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}

  getUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.status(200).json({ path: req.path, users });
  };
}
