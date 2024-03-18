import { createAction, props } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ dish: Dish }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ id: string }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
