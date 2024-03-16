const express = require('express');
const router = express.Router();
const DishController = require('../controllers/dish.controller');

router.get('/', DishController.getAllDishes);
router.get('/:id', DishController.getDishById);
router.post('/', DishController.createDish);
router.put('/:id', DishController.updateDish);
router.delete('/:id', DishController.deleteDish);

module.exports = router;