import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, AppMaterialModule, AppRoutingModule],
})
export class CartModule {}
