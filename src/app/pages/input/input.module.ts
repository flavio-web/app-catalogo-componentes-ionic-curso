import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    IonicModule,
    ComponentsModule,
    FormsModule,
  ]
})
export class InputModule { }
