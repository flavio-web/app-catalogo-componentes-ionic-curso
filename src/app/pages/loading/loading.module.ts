import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingComponent } from './loading.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class LoadingModule { }
