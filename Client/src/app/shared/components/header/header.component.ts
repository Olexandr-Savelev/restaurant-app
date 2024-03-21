import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from 'src/app/store/app.interface';
import { selectCart } from 'src/app/store/selectors/cart.selector';
import { CartService } from '../../services/cart.service';
import { User } from 'src/app/models/user.model';
import { selectUser } from 'src/app/store/selectors/user.selector';
import { logout } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  itemsCount: number = 0;
  dishesSubsctiption!: Subscription;
  user$: Observable<User | null>;

  constructor(
    private store: Store<IAppState>,
    private cartService: CartService
  ) {
    this.user$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {
    this.dishesSubsctiption = this.store
      .pipe(select(selectCart))
      .subscribe((cart) => {
        this.itemsCount = this.cartService.getItemsCount(cart);
      });
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  ngOnDestroy(): void {
    this.dishesSubsctiption.unsubscribe();
  }
}
