import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearCart,
  removeFromCart,
  updateQuantity,
} from '../actions/cart.actions';
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

  on(updateQuantity, (state, { id, num }) => {
    const index = state.findIndex((d) => d._id === id);
    if (index !== -1) {
      const updatedDish = {
        ...state[index],
        quantity: state[index].quantity + num,
      };
      return [...state.slice(0, index), updatedDish, ...state.slice(index + 1)];
    }
    return state;
  }),

  on(clearCart, () => {
    return [];
  })
);
