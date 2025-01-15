import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertModule )
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarModule )
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonModule )
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardModule )
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListModule )
  },
  {
    path: 'refresh',
    loadChildren: () => import('./pages/refresh/refresh.module').then( m => m.RefreshModule )
  },
  {
    path: '',
    redirectTo: 'action-sheet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
