import { createAction, props } from '@ngrx/store';
import { DishCartItem } from 'src/app/models/cart.model';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ dish: DishCartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ id: string }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
