import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);
  return userService.isAuthenticated().pipe(
    map((status) => {
      if (status) {
        return true;
      }

      return router.createUrlTree(['/login']);
    })
  );
};
