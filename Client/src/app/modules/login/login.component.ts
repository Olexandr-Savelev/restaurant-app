import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginData } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private userService: UserService) {}
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    const userData: UserLoginData = {
      name: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    };
    this.userService.setUser(userData);
    // this.http.post(`./api/login`, userData).subscribe(console.log);
  }
}
