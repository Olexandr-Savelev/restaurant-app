const Dish = require('../models/dish.model');

class DishController {
    static async getAllDishes(req, res) {
        try {
            const dishes = await Dish.find();
            res.json(dishes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createDish(req, res) {
        try {
            const { name, description, price, category, image } = req.body;
            if (!name || !description || !price || !category || !image) {
                return res.status(400).json({ error: 'Missing required properties' });
            }
            const newDish = new Dish({ name, description, price, category, image });
            await newDish.save();
            res.status(201).json(newDish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getDishById(req, res) {
        try {
            const dish = await Dish.findById(req.params.id);
            if (!dish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            res.json(dish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateDish(req, res) {
        try {
            const { name, description, price, category } = req.body;
            const updatedDish = await Dish.findByIdAndUpdate(req.params.id, { name, description, price, category }, { new: true });
            if (!updatedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            res.json(updatedDish);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteDish(req, res) {
        try {
            const deletedDish = await Dish.findByIdAndDelete(req.params.id);
            if (!deletedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            res.json(deletedDish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = DishController;