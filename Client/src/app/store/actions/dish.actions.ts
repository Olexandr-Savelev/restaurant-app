import { Action } from '@ngrx/store';

export enum DishesActions {
  LoadDishes = '[Dishes] LoadDishes',
}

export class LoadDishes implements Action {
  readonly type = DishesActions.LoadDishes;
}
