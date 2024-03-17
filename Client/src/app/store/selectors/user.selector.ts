import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.interface';
import { User } from 'src/app/models/user.model';

export const selectUserState = (state: IAppState) => state.user;

export const selectUser = createSelector(selectUserState, (user: User) => user);
