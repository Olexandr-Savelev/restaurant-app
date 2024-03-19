import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DishCartItem } from 'src/app/models/cart.model';
import { IAppState } from 'src/app/store/app.interface';
import { selectCart } from 'src/app/store/selectors/cart.selector';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  itemsCount: number = 0;
  dishesSubsctiption!: Subscription;

  constructor(
    private store: Store<IAppState>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.dishesSubsctiption = this.store
      .pipe(select(selectCart))
      .subscribe((cart) => {
        this.itemsCount = this.cartService.getItemsCount(cart);
      });
  }

  ngOnDestroy(): void {
    this.dishesSubsctiption.unsubscribe();
  }
}
