import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getItemsCount(cart: Cart): number {
    return cart.reduce((prev, cur) => {
      return prev + +cur.quantity;
    }, 0);
  }

  getTotalPrice(cart: Cart): number {
    return cart.reduce((total, dish) => total + dish.quantity * dish.price, 0);
  }
}
