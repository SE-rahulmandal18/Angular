
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return false;
  }

  CanActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return false;
    }
}

    // throw new Error('Method not implemented.');
//   }
//   CanActivate(
//     next: ActivatedRouteSnapshot,
//     state:RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return false;
//   }

 