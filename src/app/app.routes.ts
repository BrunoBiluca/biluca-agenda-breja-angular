import { Routes } from '@angular/router';
import { Login } from '../auth/login/login';
import { MainPageComponent } from './main-page/main-page.component';
import { protectedRouteGuard } from 'src/auth/routes/protected-route-guard';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [protectedRouteGuard],
  },
  {
    path: 'login',
    component: Login,
  },
];
