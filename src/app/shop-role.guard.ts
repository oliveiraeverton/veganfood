import { CanActivateFn } from '@angular/router';

export const shopRoleGuard: CanActivateFn = (route, state) => {
  return true;
};
