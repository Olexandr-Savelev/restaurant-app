import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserLoginData } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   let isAuthenticated: boolean = false;
  //   const val = this.getUser().subscribe((user) => {
  //     return user.isAdmin;
  //   });
  //   console.log(val);
  //   if (isAuthenticated) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }

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
