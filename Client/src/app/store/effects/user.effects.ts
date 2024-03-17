import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import {
  loadUser,
  loadUserFailure,
  loadUserSuccess,
  setUser,
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

  setUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUser),
      mergeMap((action) =>
        this.userService.setUser(action.userData).pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserFailure({ message: error.message })))
        )
      )
    )
  );
}
