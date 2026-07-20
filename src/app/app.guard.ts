import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const appGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const accessToken = sessionStorage.getItem("jwt");
  if(!accessToken) {
    return router.createUrlTree(['/auth/login']);
  };
  
  return true;
};
