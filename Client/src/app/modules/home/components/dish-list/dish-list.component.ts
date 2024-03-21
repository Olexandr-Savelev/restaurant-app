import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Dish } from 'src/app/models/dish.model';
import { loadDishes } from 'src/app/store/actions/dish.actions';
import { IAppState } from 'src/app/store/app.interface';
import { selectAllDishes } from 'src/app/store/selectors/dish.selector';
import { BreakpointObserver } from '@angular/cdk/layout';
import { User } from 'src/app/models/user.model';
import { selectUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  dishes$: Observable<Dish[]>;
  user$: Observable<User | null>;
  cols$: Observable<number>;
  cols!: number;

  constructor(
    private store: Store<IAppState>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.dishes$ = this.store.pipe(select(selectAllDishes));
    this.user$ = this.store.pipe(select(selectUser));
    const customBreakpoints = {
      small: '(max-width: 599px)',
      medium: '(min-width: 600px) and (max-width: 959px)',
      large: '(min-width: 960px) and (max-width: 1279px)',
      extraLarge: '(min-width: 1280px)',
    };
    this.cols$ = this.breakpointObserver
      .observe([
        customBreakpoints.small,
        customBreakpoints.medium,
        customBreakpoints.large,
        customBreakpoints.extraLarge,
      ])
      .pipe(
        map((result) => {
          if (result.breakpoints[customBreakpoints.small]) {
            return 1;
          }
          if (result.breakpoints[customBreakpoints.medium]) {
            return 2;
          }
          if (result.breakpoints[customBreakpoints.large]) {
            return 3;
          }
          if (result.breakpoints[customBreakpoints.extraLarge]) {
            return 4;
          }
          return 4;
        })
      );
    this.cols$.subscribe((value) => {
      this.cols = value;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadDishes());
  }
}
