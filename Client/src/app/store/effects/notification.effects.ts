import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addDishFailure,
  addDishSuccess,
  deleteDishFailure,
  deleteDishSuccess,
  updateDishFailure,
  updateDishSuccess,
} from '../actions/dish.actions';
import { tap } from 'rxjs';
import { addToCart } from '../actions/cart.actions';

@Injectable()
export class NotificationEffects {
  private readonly _actionsForShowingMessage = [
    addToCart,
    addDishSuccess,
    addDishFailure,
    deleteDishSuccess,
    deleteDishFailure,
    updateDishSuccess,
    updateDishFailure,
  ];

  constructor(private actions$: Actions, private snackbar: MatSnackBar) {}

  notificationEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(...this._actionsForShowingMessage),
        tap((action) => {
          this.snackbar.open(action.message, 'OK', { duration: 3000 });
        })
      ),
    { dispatch: false }
  );
}
