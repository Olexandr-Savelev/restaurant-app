import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dish.model';
import { loadDishes } from 'src/app/store/actions/dish.actions';
import { IAppState } from 'src/app/store/app.interface';
import { selectAllDishes } from 'src/app/store/selectors/dish.selector';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  dishes$: Observable<Dish[]>;

  constructor(
    private store: Store<IAppState>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.dishes$ = this.store.pipe(select(selectAllDishes));
  }

  ngOnInit(): void {
    this.store.dispatch(loadDishes());
  }

  getColsForScreenSize(): number {
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      return 1;
    }
    if (
      this.breakpointObserver.isMatched(
        '(min-width: 600px) and (max-width: 959px)'
      )
    ) {
      return 2;
    }
    if (
      this.breakpointObserver.isMatched(
        '(min-width: 960px) and (max-width: 1279px)'
      )
    ) {
      return 3;
    }
    return 4;
  }
}
