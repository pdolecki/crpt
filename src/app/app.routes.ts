import { Routes } from '@angular/router';
import Portfolio from './holdings/portfolio';

export const routes: Routes = [
  {
    path: 'portfolio',
    component: Portfolio,
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
];
