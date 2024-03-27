import { createAction, props } from '@ngrx/store';
import { DishCartItem } from 'src/app/models/cart.model';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ dish: DishCartItem; message: string }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ id: string; message: string }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
