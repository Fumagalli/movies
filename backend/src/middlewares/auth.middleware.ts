import { Response, NextFunction } from "express";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { UserJwtPayload } from "../dtos/user.dto";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Token not provided" });
    return;
  }

  const [, token] = authHeader.split(" ");
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    if (token === jwtSecret) {
      next();
      return;
    }

    const decoded = jwt.verify(token, jwtSecret) as UserJwtPayload;
    console.log("decoded", decoded);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
}
