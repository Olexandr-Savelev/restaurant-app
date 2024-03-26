import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  loadDishes,
  loadDishesSuccess,
  loadDishesFailure,
  addDish,
  addDishSuccess,
  addDishFailure,
  deleteDish,
  deleteDishSuccess,
  deleteDishFailure,
  updateDish,
  updateDishFailure,
  updateDishSuccess,
} from '../actions/dish.actions';
import { DishService } from 'src/app/shared/services/dish.service';

@Injectable()
export class DishEffects {
  constructor(private actions$: Actions, private dishService: DishService) {}

  loadDishes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDishes),
      switchMap(() =>
        this.dishService.getDishes().pipe(
          map((dishes) => loadDishesSuccess({ dishes })),
          catchError((error) =>
            of(loadDishesFailure({ message: error.message }))
          )
        )
      )
    )
  );

  addDish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDish),
      switchMap((action) =>
        this.dishService.addDish(action.dishData).pipe(
          map((dish) =>
            addDishSuccess({ dish, message: `${dish.name} added to menu.` })
          ),
          catchError((error) => of(addDishFailure({ message: error.message })))
        )
      )
    )
  );

  deleteDish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDish),
      switchMap((action) =>
        this.dishService.deleteDish(action.id).pipe(
          map((dish) =>
            deleteDishSuccess({
              dish,
              message: `${dish.name} deleted from menu.`,
            })
          ),
          catchError((error) =>
            of(deleteDishFailure({ message: error.message }))
          )
        )
      )
    )
  );

  updateDish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDish),
      switchMap((action) =>
        this.dishService.updateDish(action.dish).pipe(
          map((dish) =>
            updateDishSuccess({ dish, message: `${dish.name} edited.` })
          ),
          catchError((error) =>
            of(updateDishFailure({ message: error.message }))
          )
        )
      )
    )
  );
}
