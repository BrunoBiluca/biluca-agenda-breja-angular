import { Routes } from '@angular/router';
import { Login } from '../auth/login/login';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: Login,
  }
];
