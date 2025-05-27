import "express";
import { File } from "multer";
import { UserJwtPayload } from "../../dtos/user.dto";

declare module "express" {
  interface Request {
    user?: UserJwtPayload;
    file?: File;
    files?: File[];
  }
}
