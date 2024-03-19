import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { AdminPageComponent } from './modules/admin/components/admin-page/admin-page.component';
import { CartPageComponent } from './modules/cart/components/cart-page/cart-page.component';
import { LoginPageComponent } from './modules/login/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
