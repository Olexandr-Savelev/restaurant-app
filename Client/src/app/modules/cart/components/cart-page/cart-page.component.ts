import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { IAppState } from 'src/app/store/app.interface';
import { selectCart } from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart$: Observable<Cart>;

  constructor(
    private store: Store<IAppState>,
    private cartService: CartService
  ) {
    this.cart$ = this.store.pipe(select(selectCart));
  }
  getTotalPrice(cart: Cart): number {
    return this.cartService.getTotalPrice(cart);
  }
}
