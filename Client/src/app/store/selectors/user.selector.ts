import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.interface';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = (state: IAppState) => state.user;

export const selectUserSateData = createSelector(
  selectUserState,
  (userState: UserState) => userState
);

export const selectUserError = createSelector(
  selectUserState,
  ({ error }: UserState) => error
);

export const selectUser = createSelector(
  selectUserState,
  ({ user }: UserState) => user
);
