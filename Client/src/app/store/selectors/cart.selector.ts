import { createSelector } from '@ngrx/store';

import { IAppState } from '../app.interface';
import { Cart } from 'src/app/models/cart.model';

export const selectCartState = (state: IAppState) => state.cart;

export const selectCart = createSelector(selectCartState, (cart: Cart) => cart);
