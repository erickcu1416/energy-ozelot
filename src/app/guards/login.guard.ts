import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
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
            // En dado caso que exista el storage almacenado, será inmediatamente redireccionado
            // al home y no podrá acceder al login

            console.log('Existe estorage');
            this.router.navigate(['/home']);
            return resolve(false);
          } else {
            // Si no existe el storage, podrá acceder al login
            console.log('No Existe estorage');
            return resolve(true);
          }
        }, err => {
          console.log(err);
          return resolve(true);
        }
      );
    });
  }
}
