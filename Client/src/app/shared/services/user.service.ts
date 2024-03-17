import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLoginData } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`./api/login`);
  }

  setUser(user: UserLoginData): Observable<User> {
    return this.http.post<User>(`./api/login`, user);
  }
}
