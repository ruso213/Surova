import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const categoryRootGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  // Verifica si hay al menos un query parameter con un valor no vacío
  const hasValidQueryParam = Object.values(route.queryParams).some(
    param => param && param.trim().length > 0 
  );

  return hasValidQueryParam ? true : router.parseUrl('/home');

};
