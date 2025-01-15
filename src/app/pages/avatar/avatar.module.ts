import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class AvatarModule { }
