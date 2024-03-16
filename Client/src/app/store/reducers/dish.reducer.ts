import { State } from '@ngrx/store';
import { Dish } from 'src/app/models/dish.model';
import { GetDishes } from '../actions/dish.actions';

const initialState: Dish[] = [];

export function usersReducer(state: State = initialState, action: LoadDishes) {
  switch (action.type) {
    case UsersActions.LoadUsers:
      return {
        ...state,
        users: action.payload.users,
      };
    case UsersActions.DeleteUsers:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
}
