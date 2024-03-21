import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { DishDialogComponent } from 'src/app/modules/admin/components/dish-dialog/dish-dialog.component';
import { IAppState } from 'src/app/store/app.interface';
import { selectUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  user$: Observable<User | null>;

  constructor(private store: Store<IAppState>, private dialog: MatDialog) {
    this.user$ = this.store.pipe(select(selectUser));
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      action: 'add',
    };

    this.dialog.open(DishDialogComponent, dialogConfig);
  }
}
