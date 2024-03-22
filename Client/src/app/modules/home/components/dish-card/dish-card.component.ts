import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DishCartItem } from 'src/app/models/cart.model';
import { Dish } from 'src/app/models/dish.model';
import { User } from 'src/app/models/user.model';
import { DishDialogComponent } from 'src/app/modules/admin/components/dish-dialog/dish-dialog.component';
import { addToCart } from 'src/app/store/actions/cart.actions';
import { deleteDish } from 'src/app/store/actions/dish.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit, OnDestroy {
  @Input() dish!: Dish;
  @Input() user!: User | null;
  dialogRefSubscription?: Subscription;

  constructor(
    private store: Store<IAppState>,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  addToCart() {
    const dishCartItem: DishCartItem = { ...this.dish, quantity: 1 };
    this.store.dispatch(addToCart({ dish: dishCartItem }));
    this.showSnackbar(`${this.dish.name} added to cart.`);
  }

  onDelete() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      action: 'Delete',
    };

    const dialogRef = this.dialog.open(DishDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'confirm' && this.dish._id) {
        this.store.dispatch(deleteDish({ id: this.dish._id }));
        //TODO: fire this function on successfully dish delete
        this.showSnackbar(`${this.dish.name} deleted.`);
      }
    });
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

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Ok', {
      duration: 3000,
    });
  }

  ngOnDestroy(): void {
    if (this.dialogRefSubscription) {
      this.dialogRefSubscription.unsubscribe();
    }
  }
}
