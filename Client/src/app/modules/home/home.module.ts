import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [HomePageComponent, DishListComponent, DishCardComponent],
  imports: [CommonModule, AppMaterialModule],
})
export class HomeModule {}
