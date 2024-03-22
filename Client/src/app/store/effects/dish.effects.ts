import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  loadDishes,
  loadDishesSuccess,
  loadDishesFailure,
  addDish,
  addDishSuccess,
  addDishFailure,
} from '../actions/dish.actions';
import { DishService } from 'src/app/shared/services/dish.service';
import { Action } from '@ngrx/store';

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

  addDish$: any = createEffect(() =>
    this.actions$.pipe(
      ofType(addDish),
      switchMap((action) =>
        this.dishService.addDish(action.dishData).pipe(
          map((dish) => addDishSuccess({ dish })),
          catchError((error) => of(addDishFailure({ message: error.message })))
        )
      )
    )
  );
}
