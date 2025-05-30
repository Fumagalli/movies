import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserService {
  static async register(name: string, email: string, password: string) {
    const repo = AppDataSource.getRepository(User);
    const exists = await repo.findOneBy({ email });
    if (exists) throw new Error("Email already registered");
    const hash = await bcrypt.hash(password, 10);
    const user = repo.create({ name, email, password: hash });
    await repo.save(user);

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );

    console.log("token", token);

    // acho que não precisa retornar o user.
    return { user, token };
  }

  static async login(email: string, password: string) {
    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOneBy({ email });
    if (!user) throw new Error("Invalid credentials");
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );

    // acho que não precisa retonar o user.
    return { user, token };
  }

  static async getById(id: number) {
    const repo = AppDataSource.getRepository(User);
    return repo.findOneBy({ id });
  }
}
