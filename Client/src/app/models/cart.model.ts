import { Dish } from './dish.model';

export interface DishCartItem extends Dish {
  quantity: number;
}

export type Cart = DishCartItem[];
