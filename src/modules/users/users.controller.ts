import { Request, Response } from "express";
import { UserService } from "./users.service";

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({ message: "User created", data: user });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: err.message, err });
    }
  }
  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.status(201).json({ message: "All Users", data: users });
  }
  async getUserById(req: Request, res: Response) {
    const user = await userService.getUserById(Number(req.params.id));
  }
  async updateUser(req: Request, res: Response) {
    try {
      const updated = await userService.updateUser(
        Number(req.params.id),
        req.body
      );
      res.json(updated);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deleted = await userService.deleteUser(Number(req.params.id));
      res.json(deleted);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
