import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLoginData } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/api/login`, {
      withCredentials: true,
    });
  }

  setUser(user: UserLoginData): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/api/login`, user, {
      withCredentials: true,
    });
  }
}
