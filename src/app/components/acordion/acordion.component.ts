import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';
import { MbscFormOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss'],
})
export class AcordionComponent implements OnInit {

  // Place the code below into your own component or use the full template
  @ViewChild('adeline')
  adeline: any;
  @ViewChild('carl')
  carl: any;
  @ViewChild('tinker')
  tinker: any;
  @ViewChild('barry')
  barry: any;

  formSettings: MbscFormOptions = {
    theme: 'ios'
  };

  listviewSettings: any = {
    swipe: false,
    enhance: true
  };

  constructor() { }

  ngOnInit() {
  }


  closeAll() {
    this.adeline.instance.hide();
    this.carl.instance.hide();
    this.tinker.instance.hide();
    this.barry.instance.hide();
  }

  toggleLast() {
    this.barry.instance.toggle();
  }

}
