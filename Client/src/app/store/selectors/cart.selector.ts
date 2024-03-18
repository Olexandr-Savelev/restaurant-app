import { createSelector } from '@ngrx/store';

import { Dish } from 'src/app/models/dish.model';
import { IAppState } from '../app.interface';

export const selectDishState = (state: IAppState) => state.cart;

export const selectAllDishes = createSelector(
  selectDishState,
  (cartList: Dish[]) => cartList
);
