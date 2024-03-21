import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { User, UserLoginData } from 'src/app/models/user.model';
import { login } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/app.interface';
import {
  selectUser,
  selectUserSateData,
} from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  userSubscription!: Subscription;
  constructor(
    private store: Store<IAppState>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit() {
    const userData: UserLoginData = {
      name: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    };

    this.store.dispatch(login({ userData }));

    this.userSubscription = this.store
      .pipe(select(selectUserSateData))
      .subscribe((data) => {
        if (data.user) {
          this.snackBar.open(
            `${data.user.name} logged in successfully.`,
            'Ok',
            {
              duration: 3000,
            }
          );
          this.router.navigateByUrl('/');
        }
        if (data.error) {
          this.snackBar.open(`Error: ${data.error}`, 'Ok', {
            duration: 3000,
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
