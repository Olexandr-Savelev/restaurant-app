import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserLoginData } from 'src/app/models/user.model';
import { loadUser, setUser } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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
