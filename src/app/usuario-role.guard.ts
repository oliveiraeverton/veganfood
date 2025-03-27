import { CanActivateFn } from '@angular/router';

export const usuarioRoleGuard: CanActivateFn = (route, state) => {
  return true;
};
