import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", async (req, res) => {
  await UserController.register(req, res);
});
router.post("/login", async (req, res) => {
  await UserController.login(req, res);
});
router.get("/me", authMiddleware, async (req, res) => {
  await UserController.me(req, res);
});

export default router;
