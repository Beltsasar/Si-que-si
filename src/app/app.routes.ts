import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'main', loadComponent:() => import ('./main/main.page').then (m=> m.MainPage) },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },

];
