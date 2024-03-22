import { createReducer, on, Action } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';
import {
  addDish,
  addDishSuccess,
  deleteDish,
  deleteDishFailure,
  loadDishes,
  loadDishesFailure,
  loadDishesSuccess,
  deleteDishSuccess,
} from '../actions/dish.actions';

export const initialState: Dish[] = [];

export const dishReducer = createReducer(
  initialState,

  on(loadDishes, (state) => state),
  on(loadDishesSuccess, (_, { dishes }) => dishes),
  on(loadDishesFailure, (state, { message }) => {
    console.error('Failed to load dishes:', message);
    return state;
  }),

  on(addDish, (state) => state),
  on(addDishSuccess, (state, { dish }) => [...state, dish]),
  on(loadDishesFailure, (state, { message }) => {
    console.error('Failed to add dish:', message);
    return state;
  }),

  on(deleteDish, (state) => state),
  on(deleteDishSuccess, (state, { dish }) =>
    state.filter((d) => dish._id !== d._id)
  ),
  on(deleteDishFailure, (state, { message }) => {
    console.error('Failed to delete dish:', message);
    return state;
  })
);

export function DishReducer(state: Dish[] | undefined, action: Action): Dish[] {
  return dishReducer(state, action);
}
