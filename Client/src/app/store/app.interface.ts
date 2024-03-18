import { Cart } from '../models/cart.model';
import { Dish } from '../models/dish.model';
import { User } from '../models/user.model';

export interface IAppState {
  dishes: Dish[];
  user: User;
  cart: Cart;
}
