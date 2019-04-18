import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.userService.loadStorage().then(
        data => {
          if (data) {
            console.log('Existe estorage');
            return resolve(true);
          } else {
            console.log('No Existe estorage');
            if (this.userService.user === true) {
              console.log('Recibí', this.userService.user);
              return resolve(true);
            } else {
              this.router.navigate(['/login']);
              return resolve(false);
            }
          }
        }, err => {
          console.log(err);
          return resolve(false);
        }
      );
    });
  }
}
