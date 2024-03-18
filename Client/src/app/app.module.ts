import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './store';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { AdminModule } from './modules/admin/admin.module';
import { CartModule } from './modules/cart/cart.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppStoreModule,
    HomeModule,
    AdminModule,
    CartModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
