import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { User, UserLoginData } from 'src/app/models/user.model';
import { IAppState } from 'src/app/store/app.interface';
import { selectUser } from 'src/app/store/selectors/user.selector';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  isAuthenticated(): Observable<boolean> {
    return this.store.pipe(
      select(selectUser),
      map((user: User | null) => {
        if (user && user.isAdmin) {
          return true;
        }
        return false;
      })
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/api/login`, {
      withCredentials: true,
    });
  }

  login(user: UserLoginData): Observable<User | { error: string }> {
    return this.http.post<User>(`${environment.apiUrl}/api/login`, user, {
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/login`, {
      withCredentials: true,
    });
  }
}
