import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import {
  loadUser,
  loadUserFailure,
  loadUserSuccess,
  logout,
} from '../actions/user.actions';

export interface UserState {
  user: User | null;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state) => state),
  on(loadUserSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(loadUserFailure, (state, { message }) => ({
    ...state,
    user: null,
    error: message,
  })),
  on(logout, (state) => ({ ...state, user: null, error: null }))
);

export function UserReducer(state: UserState, action: Action): UserState {
  return userReducer(state, action);
}
