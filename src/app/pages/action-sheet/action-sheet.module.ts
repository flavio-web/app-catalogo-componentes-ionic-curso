import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionSheetRoutingModule } from './action-sheet-routing.module';
import { ActionSheetComponent } from './action-sheet.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ActionSheetComponent
  ],
  imports: [
    CommonModule,
    ActionSheetRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class ActionSheetModule { }
