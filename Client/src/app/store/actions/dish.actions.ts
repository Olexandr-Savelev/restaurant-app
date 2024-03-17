import { createAction, props } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';

export const loadDishes = createAction('[Dishes] Load Dishes');

export const loadDishesSuccess = createAction(
  '[Dishes] Load Dishes Success',
  props<{ dishes: Dish[] }>()
);

export const loadDishesFailure = createAction(
  '[Dishes] Load Dishes Failure',
  props<{ message: string }>()
);
