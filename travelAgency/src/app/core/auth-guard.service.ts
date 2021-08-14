import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { needAuthentication, URLToRedirect, agentProfile } = route.data;
    if (agentProfile && this.userService.isLoggedUser && this.userService.role !== 'Agent') {
      return this.router.parseUrl(URLToRedirect);
    }

    if (typeof needAuthentication === 'boolean' && needAuthentication === this.userService.isLoggedUser) { return true };
    
    return this.router.parseUrl(URLToRedirect) || '/';
  }
}
