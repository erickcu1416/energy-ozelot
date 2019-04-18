import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';
import { AcordionComponent } from './acordion/acordion.component';

@NgModule({
  declarations: [
    PopoverComponent,
    AcordionComponent,
  ],
  exports: [
    PopoverComponent,
    AcordionComponent,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
