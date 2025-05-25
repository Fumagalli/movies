import { Router } from "express";
import { MovieController } from "../controllers/movie.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.get("/", authMiddleware, MovieController.list);
router.post("/", authMiddleware, MovieController.create);
router.get("/:id", authMiddleware, MovieController.getById);
router.put("/:id", authMiddleware, MovieController.update);
router.delete("/:id", authMiddleware, MovieController.remove);
router.post("/:id/image", authMiddleware, upload.single("image"), MovieController.uploadImage);

export default router;
