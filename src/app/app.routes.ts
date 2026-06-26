import { Routes } from '@angular/router';
import { Login } from '../auth/login/login';
import { MainPageComponent } from './main-page/main-page.component';
import { protectedRouteGuard } from 'src/auth/routes/protected-route-guard';
import { BreweryDetail } from './breweries/brewery-detail/brewery-detail';
import { BreweryNotFound } from './breweries/brewery-not-found/brewery-not-found';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [protectedRouteGuard],
    children: [
      {
        path: 'brewery-not-found',
        component: BreweryNotFound,
      },
      {
        path: ':breweryId',
        component: BreweryDetail,
      },
    ],
  },
];
