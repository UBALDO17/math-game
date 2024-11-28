import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',  // Default tab
    pathMatch: 'full',
  },
  {
    path: 'tabs',  // Tabs parent route
    children: [
      {
        path: 'home',  // Home tab route
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'games',  // Games tab route
        loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule),
      },
      {
        path: 'profile',  // Profile tab route
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/tabs/home',  // Fallback route
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
