import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Input() user!: User | null;
}
