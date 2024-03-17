import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import {
  loadUser,
  loadUserFailure,
  loadUserSuccess,
} from '../actions/user.actions';

export const initialState: User | null = {};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state) => state),
  on(loadUserSuccess, (_, { user }) => user),
  on(loadUserFailure, (state, { message }) => {
    console.error('Failed to load user:', message);
    return state;
  })
);

export function UserReducer(state: User | undefined, action: Action): User {
  return userReducer(state, action);
}
