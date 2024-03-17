import Dish from "../models/dish.model";
import { Request, Response } from "express";

class DishController {
  static async getAllDishes(req: Request, res: Response) {
    try {
      const dishes = await Dish.find();
      res.json(dishes);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json(errorMessage);
    }
  }

  static async createDish(req: Request, res: Response) {
    try {
      const { name, description, price, category, image } = req.body;
      if (!name || !description || !price || !category || !image) {
        return res.status(400).json({ error: "Missing required properties" });
      }
      const newDish = new Dish({ name, description, price, category, image });
      await newDish.save();
      res.status(201).json(newDish);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json(errorMessage);
    }
  }

  static async getDishById(req: Request, res: Response) {
    try {
      const dish = await Dish.findById(req.params.id);
      if (!dish) {
        return res.status(404).json({ error: "Dish not found" });
      }
      res.json(dish);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json(errorMessage);
    }
  }

  static async updateDish(req: Request, res: Response) {
    try {
      const { name, description, price, category } = req.body;
      const updatedDish = await Dish.findByIdAndUpdate(
        req.params.id,
        { name, description, price, category },
        { new: true }
      );
      if (!updatedDish) {
        return res.status(404).json({ error: "Dish not found" });
      }
      res.json(updatedDish);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(400).json(errorMessage);
    }
  }

  static async deleteDish(req: Request, res: Response) {
    try {
      const deletedDish = await Dish.findByIdAndDelete(req.params.id);
      if (!deletedDish) {
        return res.status(404).json({ error: "Dish not found" });
      }
      res.json(deletedDish);
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json(errorMessage);
    }
  }
}

export default DishController;
