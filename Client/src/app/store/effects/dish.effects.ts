import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  loadDishes,
  loadDishesSuccess,
  loadDishesFailure,
} from '../actions/dish.actions';
import { DishService } from 'src/app/modules/home/services/dish.service';

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
}
