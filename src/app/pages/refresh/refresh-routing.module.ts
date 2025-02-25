import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefreshComponent } from './refresh.component';

const routes: Routes = [
  {
    path: '',
    component: RefreshComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefreshRoutingModule { }
