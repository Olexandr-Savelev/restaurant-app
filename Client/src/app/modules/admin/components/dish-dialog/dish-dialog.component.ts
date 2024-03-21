import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dish.model';

export interface DishDialogData {
  action: string;
  dish?: Dish;
}

@Component({
  selector: 'app-dish-dialog',
  templateUrl: './dish-dialog.component.html',
  styleUrls: ['./dish-dialog.component.scss'],
})
export class DishDialogComponent {
  dialogData!: DishDialogData;
  constructor(
    private dialogRef: MatDialogRef<DishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: DishDialogData
  ) {
    this.dialogData = data;
  }

  onClose() {
    this.dialogRef.close();
  }
}
