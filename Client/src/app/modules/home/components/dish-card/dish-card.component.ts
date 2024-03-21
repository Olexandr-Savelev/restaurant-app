import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DishCartItem } from 'src/app/models/cart.model';
import { Dish } from 'src/app/models/dish.model';
import { User } from 'src/app/models/user.model';
import { DishDialogComponent } from 'src/app/modules/admin/components/dish-dialog/dish-dialog.component';
import { addToCart } from 'src/app/store/actions/cart.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnDestroy {
  @Input() dish!: Dish;
  @Input() user!: User | null;
  dialogRefSubscription?: Subscription;

  constructor(private store: Store<IAppState>, private dialog: MatDialog) {}

  addToCart() {
    const dishCartItem: DishCartItem = { ...this.dish, quantity: 1 };
    this.store.dispatch(addToCart({ dish: dishCartItem }));
  }

  onDelete() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      action: 'Delete',
    };

    const dialogRef = this.dialog.open(DishDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => console.log(res));
  }

  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      action: 'Edit',
      dish: this.dish,
    };

    this.dialog.open(DishDialogComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    if (this.dialogRefSubscription) {
      this.dialogRefSubscription.unsubscribe();
    }
  }
}
