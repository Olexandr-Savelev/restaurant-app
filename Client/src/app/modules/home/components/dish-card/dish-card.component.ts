import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Dish } from 'src/app/models/dish.model';
import { User } from 'src/app/models/user.model';
import { DishDialogComponent } from 'src/app/modules/admin/components/dish-dialog/dish-dialog.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { deleteDish } from 'src/app/store/actions/dish.actions';
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

  constructor(
    private store: Store<IAppState>,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  addToCart() {
    this.cartService.addToCart(this.dish);
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

  ngOnDestroy(): void {
    if (this.dialogRefSubscription) {
      this.dialogRefSubscription.unsubscribe();
    }
  }
}
