import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  loadUser,
  loadUserFailure,
  loadUserSuccess,
  login,
  logout,
} from '../actions/user.actions';
import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserFailure({ message: error.message })))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.userService.login(action.userData).pipe(
          map((data) => {
            if ('error' in data) {
              return loadUserFailure({ message: data.error });
            } else {
              return loadUserSuccess({ user: data });
            }
          }),
          catchError((error) => of(loadUserFailure({ message: error.message })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.userService.logout().pipe(
          map(() => loadUser()),
          catchError((error) => of(loadUserFailure({ message: error.message })))
        )
      )
    )
  );
}
