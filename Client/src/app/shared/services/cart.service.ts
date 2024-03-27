import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart, DishCartItem } from 'src/app/models/cart.model';
import { Dish } from 'src/app/models/dish.model';
import { addToCart, removeFromCart } from 'src/app/store/actions/cart.actions';
import { IAppState } from 'src/app/store/app.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<IAppState>) {}

  getItemsCount(cart: Cart): number {
    return cart.reduce((prev, cur) => {
      return prev + +cur.quantity;
    }, 0);
  }

  getTotalPrice(cart: Cart): number {
    return cart.reduce((total, dish) => total + dish.quantity * dish.price, 0);
  }

  addToCart(dish: Dish) {
    const dishCartItem: DishCartItem = { ...dish, quantity: 1 };
    this.store.dispatch(
      addToCart({
        dish: dishCartItem,
        message: `${dish.name} added to cart`,
      })
    );
  }

  removeFromCart(dish: Dish) {
    this.store.dispatch(
      removeFromCart({
        id: dish._id,
        message: `${dish.name} removed from cart.`,
      })
    );
  }
}
