import { Response, Request } from "express";
import { UserService } from "../services/user.service";
import { UserRegisterDTO } from "../dtos/user.dto";
import { UserLoginDTO } from "../dtos/user.dto";

import { UserJwtPayload } from "../dtos/user.dto";

declare module "express" {
  interface Request {
    user?: UserJwtPayload;
    file?: Express.Multer.File;
    files?:
      | Express.Multer.File[]
      | { [fieldname: string]: Express.Multer.File[] };
  }
}

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password }: UserRegisterDTO = req.body;
      const user = await UserService.register(name, email, password);
      res.status(201).json(user);
      return;
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(400).json({ message: "An unknown error occurred" });
      return;
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password }: UserLoginDTO = req.body;
      const result = await UserService.login(email, password);
      return res.json(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(400).json({ message: "An unknown error occurred" });
      return;
    }
  }

  static async me(req: Request, res: Response): Promise<void> {
    if (!req?.user) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }

    if (typeof req.user !== "object") {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }

    const user = await UserService.getById(req.user.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const { ...userData } = user;
    res.json(userData);
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
