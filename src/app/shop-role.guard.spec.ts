import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShopRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.hasRole('shop')) {
      return true;
    } else {
      this.router.navigate(['/login']); // Ou uma página de acesso negado
      return false;
    }
  }
}
