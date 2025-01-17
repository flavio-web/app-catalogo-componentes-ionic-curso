import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class ProgressBarModule { }
