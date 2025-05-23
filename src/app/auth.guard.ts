import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      //podemos encaminhar para outra rota
      return true;
    } else {
      //caso o usuário não estiver conectado ele é encaminhado para login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
