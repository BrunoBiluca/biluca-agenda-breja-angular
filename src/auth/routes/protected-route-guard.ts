import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const protectedRouteGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const _router = inject(Router);
  if (!authService.getLoggedUser()) {
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
