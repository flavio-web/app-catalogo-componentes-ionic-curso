import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class ModalModule { }
