import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserJwtPayload } from "../dtos/user.dto";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token not provided" });

  const [, token] = authHeader.split(" ");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as UserJwtPayload;
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
