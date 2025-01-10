import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSheetComponent } from './action-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionSheetRoutingModule { }
