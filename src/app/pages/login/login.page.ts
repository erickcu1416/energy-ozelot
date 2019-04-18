import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { CtrlsService } from '../../services/ctrls.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  showToolbar = false;
  checkbox = false;
  constructor(private restService: RestService,
              private ctrlService: CtrlsService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  tryLogin() {
    if (this.password === '' || this.email === '')  {
      this.ctrlService.presentToast('Necesitas llenar todos los campos.', 2000);
    } else if (this.email === 'agranja1@gmail.com' || this.password === 'Password1.' ) {

      if (this.checkbox === true) {
        this.userService.saveStorage();
        this.router.navigateByUrl('/home');
        this.checkbox = false;
      } else {
        this.userService.saved();
        console.log('user', this.userService.user);
        this.router.navigateByUrl('/home');
        this.checkbox = false;
      }
      this.password = '';
      this.email = '';
      // const body = {
      //   email: this.email,
      //   password: this.password,
      // };
      // this.restService.doLogin(body).subscribe(
      //   data => {
      //     console.log(data);
      //   }, err => {
      //     console.log(err);
      //   }
      // );
    } else {
      this.ctrlService.presentAlert('Usuario y/o contraseña no validos');
    }
  }

}
