import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { ViewChild } from '@angular/core';
import { MbscFormOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  expanded = false;

  data = [
    {
      id: 1,
      expanded: false,
    },
    {
      id: 2,
      expanded: false,
    },
  ];
  constructor(private popoverCtrl: PopoverController) { }

  async showPop(evento) {

    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      mode: 'md',
      event: evento,
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    await popover.onWillDismiss();

  }

  expand() {
    console.log('lcik');
    if (this.expanded === true) {
      this.expanded = false;
      console.log(this.expanded);
      return;
    }
    if (this.expanded === false) {
      this.expanded = true;
      console.log(this.expanded);
      return;
    }
  }
}
