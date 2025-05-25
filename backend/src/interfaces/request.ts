import "express";
import { UserJwtPayload } from "../dtos/user.dto";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserJwtPayload;
  }
}
