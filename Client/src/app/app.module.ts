import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './store';
import { HomeModule } from './modules/home/home.module';
import { AdminModule } from './modules/admin/admin.module';
import { CartModule } from './modules/cart/cart.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginModule } from './modules/login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SnackbarComponent],
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
    LoginModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
