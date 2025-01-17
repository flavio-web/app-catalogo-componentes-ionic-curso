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
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputModule )
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalModule )
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingModule )
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then( m => m.ProgressBarModule )
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./pages/skeleton/skeleton.module').then( m => m.SkeletonModule )
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollModule )
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
