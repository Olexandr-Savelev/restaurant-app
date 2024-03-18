import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { IAppState } from 'src/app/store/app.interface';
import { selectCart } from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart$: Observable<Cart>;

  constructor(private store: Store<IAppState>) {
    this.cart$ = this.store.pipe(select(selectCart));
  }
  getTotalPrice(cart: Cart): number {
    return cart.reduce((total, dish) => total + dish.quantity * dish.price, 0);
  }
}
