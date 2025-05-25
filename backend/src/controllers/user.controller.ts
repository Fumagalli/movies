import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserRegisterDTO } from "../dtos/user.dto";
import { UserLoginDTO } from "../dtos/user.dto";


export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password }: UserRegisterDTO = req.body;
      const user = await UserService.register(name, email, password);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password }:UserLoginDTO = req.body;
      const result = await UserService.login(email, password);
      return res.json(result);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  static async me(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await UserService.getById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { ...userData } = user;
    return res.json(userData);
  }
}


// Exemplo do multer
// import { upload } from "../middlewares/upload.middleware";

// router.post(
//   "/:id/image",
//   authMiddleware,
//   upload.single("image"),
//   MovieController.uploadImage
// );
