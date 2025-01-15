import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefreshRoutingModule } from './refresh-routing.module';
import { RefreshComponent } from './refresh.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    RefreshComponent
  ],
  imports: [
    CommonModule,
    RefreshRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class RefreshModule { }
