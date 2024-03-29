import express from "express";
const router = express.Router();
import DishController from "../controllers/dish.controller";

router.get("/", DishController.getAllDishes);
router.get("/:id", DishController.getDishById);
router.post("/", DishController.createDish);
router.put("/:id", DishController.updateDish);
router.delete("/:id", DishController.deleteDish);

export default router;
