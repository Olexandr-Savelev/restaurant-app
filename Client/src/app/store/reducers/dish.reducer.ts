import { createReducer, on, Action } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';
import {
  loadDishes,
  loadDishesFailure,
  loadDishesSuccess,
} from '../actions/dish.actions';

export const initialState: Dish[] = [];

export const dishReducer = createReducer(
  initialState,

  on(loadDishes, (state) => state),

  on(loadDishesSuccess, (_, { dishes }) => dishes),

  on(loadDishesFailure, (state, { message }) => {
    console.error('Failed to load dishes:', message);
    return state;
  })
);

export function DishReducer(state: Dish[] | undefined, action: Action): Dish[] {
  return dishReducer(state, action);
}
