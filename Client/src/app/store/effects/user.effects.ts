import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { loadUser, loadUserFailure, setUser } from '../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((user: User) => setUser({ user })),
          catchError((error) => of(loadUserFailure({ message: error.message })))
        )
      )
    )
  );
}
