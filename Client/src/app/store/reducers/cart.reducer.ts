import { createReducer, on } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';

export const initialState: Dish[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { dish }) => {
    return [...state, dish];
  }),

  on(removeFromCart, (state, { id }) => {
    return state.filter((dish) => dish.id !== id);
  }),

  on(clearCart, () => {
    return [];
  })
);
