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
    return this.http.get<User>(
      `https://restaurant-app-6jzn-1z8pbo8hs-olexandrsavelevs-projects.vercel.app/api/login`
    );
  }

  setUser(user: UserLoginData): Observable<User> {
    return this.http.post<User>(
      `https://restaurant-app-6jzn-1z8pbo8hs-olexandrsavelevs-projects.vercel.app/api/login`,
      user
    );
  }
}
