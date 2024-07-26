import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';


export const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component'),
    title: 'Not Found',
  },
];
