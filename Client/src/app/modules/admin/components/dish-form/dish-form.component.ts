import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DishDialogData } from '../dish-dialog/dish-dialog.component';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.interface';
import { addDish, updateDish } from 'src/app/store/actions/dish.actions';
import { DishData } from 'src/app/models/dish.model';

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

  constructor(private store: Store<IAppState>) {}

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

    if (this.dishForm.invalid) {
      return;
    }

    const dishData: DishData = {
      name: this.dishForm.value.name!,
      description: this.dishForm.value.description!,
      price: this.dishForm.value.price!,
      category: this.dishForm.value.category!,
      image: this.dishForm.value.image!,
    };

    if (this.data.action === 'Add') {
      this.store.dispatch(addDish({ dishData }));
    }

    if (this.data.action === 'Edit') {
      this.store.dispatch(
        updateDish({ dish: { _id: this.data.dish!._id, ...dishData } })
      );
    }
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
