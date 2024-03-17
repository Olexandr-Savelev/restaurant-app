import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dishReducer } from './reducers/dish.reducer';
import { DishEffects } from './effects/dish.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      dishes: dishReducer,
    }),

    EffectsModule.forRoot([DishEffects]),
  ],
})
export class AppStoreModule {}
