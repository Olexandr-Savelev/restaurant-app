import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DishCartItem } from 'src/app/models/cart.model';
import { Dish } from 'src/app/models/dish.model';
import { User } from 'src/app/models/user.model';
import { addToCart } from 'src/app/store/actions/cart.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Input() user!: User | null;

  constructor(private store: Store<IAppState>) {}

  addToCart() {
    const dishCartItem: DishCartItem = { ...this.dish, quantity: 1 };
    this.store.dispatch(addToCart({ dish: dishCartItem }));
  }
}
