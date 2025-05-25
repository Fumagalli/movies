import { Router } from "express";
import { FilterController } from "../controllers/filter.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, FilterController.list);

export default router;
