import { Cart } from '../models/cart.model';
import { Dish } from '../models/dish.model';
import { UserState } from './reducers/user.reducer';

export interface IAppState {
  dishes: Dish[];
  user: UserState;
  cart: Cart;
}
