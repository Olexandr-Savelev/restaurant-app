import { createAction, props } from '@ngrx/store';
import { Dish, DishData } from 'src/app/models/dish.model';

export const loadDishes = createAction('[Dishes] Load Dishes');

export const loadDishesSuccess = createAction(
  '[Dishes] Load Dishes Success',
  props<{ dishes: Dish[] }>()
);

export const loadDishesFailure = createAction(
  '[Dishes] Load Dishes Failure',
  props<{ message: string }>()
);

export const addDish = createAction(
  '[Dishes] Add Dish',
  props<{ dishData: DishData }>()
);
export const addDishSuccess = createAction(
  '[Dishes] Add Dish Success',
  props<{ dish: Dish; message: string }>()
);
export const addDishFailure = createAction(
  '[Dishes] Add Dish Failure',
  props<{ message: string }>()
);

export const deleteDish = createAction(
  '[Dishes] Delete Dish',
  props<{ id: string }>()
);
export const deleteDishSuccess = createAction(
  '[Dishes] Delete Dish Success',
  props<{ dish: Dish; message: string }>()
);
export const deleteDishFailure = createAction(
  '[Dishes] Delete Dish Failure',
  props<{ message: string }>()
);

export const updateDish = createAction(
  '[Dishes] Update Dish',
  props<{ dish: Dish }>()
);
export const updateDishSuccess = createAction(
  '[Dishes] Update Dish Success',
  props<{ dish: Dish; message: string }>()
);
export const updateDishFailure = createAction(
  '[Dishes] Update Dish Failure',
  props<{ message: string }>()
);
