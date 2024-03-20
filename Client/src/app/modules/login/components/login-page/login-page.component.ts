import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserLoginData } from 'src/app/models/user.model';
import { setUser } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private store: Store<IAppState>) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    const userData: UserLoginData = {
      name: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    };

    this.store.dispatch(setUser({ userData }));
  }
}
