import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DishDialogData } from '../dish-dialog/dish-dialog.component';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss'],
})
export class DishFormComponent {
  @Input() data!: DishDialogData;
  @Output() close: EventEmitter<void> = new EventEmitter();

  dishForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    price: new FormControl('', Validators.required),
    category: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    image: new FormControl('', Validators.required),
  });

  onSubmit() {
    Object.values(this.dishForm.controls).forEach((control) =>
      control.markAsDirty()
    );
  }

  onClose() {
    this.close.emit();
  }
}
