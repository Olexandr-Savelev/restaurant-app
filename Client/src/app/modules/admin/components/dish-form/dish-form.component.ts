import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DishDialogData } from '../dish-dialog/dish-dialog.component';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss'],
})
export class DishFormComponent implements OnInit {
  @Input() data!: DishDialogData;
  @Output() close: EventEmitter<void> = new EventEmitter();

  dishForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(350),
    ]),
    price: new FormControl(0, Validators.required),
    category: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    image: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (this.data.dish) {
      const { name, description, price, category, image } = this.data.dish;

      this.dishForm.patchValue({
        name: name,
        description: description,
        price: price,
        category: category,
        image: image,
      });
    }
  }

  onSubmit() {
    Object.values(this.dishForm.controls).forEach((control) =>
      control.markAsDirty()
    );
  }

  onClose() {
    this.close.emit();
  }
}
