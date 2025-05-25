import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserRegisterDTO } from "../dtos/user.dto";
import { UserLoginDTO } from "../dtos/user.dto";


export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password }: UserRegisterDTO = req.body;
      const user = await UserService.register(name, email, password);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password }:UserLoginDTO = req.body;
      const result = await UserService.login(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
