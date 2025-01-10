import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionSheetRoutingModule } from './action-sheet-routing.module';
import { ActionSheetComponent } from './action-sheet.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ActionSheetComponent
  ],
  imports: [
    CommonModule,
    ActionSheetRoutingModule,
    IonicModule
  ]
})
export class ActionSheetModule { }
