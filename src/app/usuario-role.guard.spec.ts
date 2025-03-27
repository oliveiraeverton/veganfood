import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.hasRole('usuario')) {
      //se o usuário estiver logado e possui a role usuario devolve true
      return true;
    } else {
      this.router.navigate(['/login']); // Ou uma página de acesso negado
      return false;
    }
  }
}
