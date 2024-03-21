import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { DishDialogComponent } from './components/dish-dialog/dish-dialog.component';

@NgModule({
  declarations: [AdminPageComponent, DishFormComponent, DishDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
})
export class AdminModule {}
