import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController, private userService: UserService, private router: Router) { }

  ngOnInit() {}

  // Al cerrar la cesión elimina el storage y redirecciona a la url
  tryLogout() {
    this.popoverCtrl.dismiss();
    this.userService.deleteStorageUser();
    this.router.navigateByUrl('');
  }

}
