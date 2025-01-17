import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonRoutingModule } from './skeleton-routing.module';
import { SkeletonComponent } from './skeleton.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    SkeletonRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class SkeletonModule { }
