import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';
import { DishCartItem } from 'src/app/models/cart.model';

export const initialState: DishCartItem[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { dish }) => {
    const existingDish = state.find((d) => d._id === dish._id);
    if (existingDish) {
      const updatedDish = {
        ...existingDish,
        quantity: existingDish.quantity + 1,
      };
      return state.map((d) => (d._id === updatedDish._id ? updatedDish : d));
    }
    return [...state, dish];
  }),

  on(removeFromCart, (state, { id }) => {
    return state.filter((dish) => dish._id !== id);
  }),

  on(clearCart, () => {
    return [];
  })
);
