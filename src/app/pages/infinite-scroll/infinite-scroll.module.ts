import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class InfiniteScrollModule { }
