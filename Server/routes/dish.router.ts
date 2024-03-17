import express from "express";
const router = express.Router();
import DishController from "../controllers/dish.controller";
import authMiddleware from "../middleware/is-auth";

router.get("/", DishController.getAllDishes);
router.get("/:id", DishController.getDishById);
router.post("/", authMiddleware, DishController.createDish);
router.put("/:id", authMiddleware, DishController.updateDish);
router.delete("/:id", authMiddleware, DishController.deleteDish);

export default router;
