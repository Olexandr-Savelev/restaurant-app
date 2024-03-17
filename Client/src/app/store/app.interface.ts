import { Dish } from '../models/dish.model';
import { User } from '../models/user.model';

export interface IAppState {
  dishes: Dish[];
  user: User;
}
