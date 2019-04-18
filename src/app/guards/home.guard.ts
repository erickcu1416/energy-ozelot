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

      // Verifica que el usuario esté logeado para acceder al home o redireccionar.

      this.userService.loadStorage().then(
        data => {
          if (data) {
            // Si seleccionó manter la sesión iniciada tiene acceso por el storage previamente almacenado

            console.log('Existe estorage');
            return resolve(true);
          } else {
            // Si no tiene acceso al storage previamente almacenado verifica si hay un dato almacenado en el proceso

            console.log('No Existe estorage');
            if (this.userService.user === true) {
              console.log('Recibí', this.userService.user);
              return resolve(true);
            } else {
            // En dado caso que no tenga almacenado en el storage y en proceso, no podrá entrar.

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
