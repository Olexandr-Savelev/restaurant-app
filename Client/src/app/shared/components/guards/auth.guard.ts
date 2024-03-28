import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  private authSubscription?: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let isAuthorized: boolean = false;
    this.authSubscription = this.userService.isAuthorized().subscribe((res) => {
      isAuthorized = res;
    });
    if (isAuthorized) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
