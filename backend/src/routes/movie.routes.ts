import { Router } from "express";
import { MovieController } from "../controllers/movie.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, MovieController.list);
router.post("/", authMiddleware, MovieController.create);
router.get("/:id", authMiddleware, MovieController.getById);
router.put("/:id", authMiddleware, MovieController.update);
router.delete("/:id", authMiddleware, MovieController.remove);

export default router;
