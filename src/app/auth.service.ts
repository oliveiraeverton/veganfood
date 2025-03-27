import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


interface User {
  isAuthenticated: boolean;
  role: 'usuario' | 'shop' | 'admin' | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User = { isAuthenticated: false, role: null };

  constructor(private router: Router) {
    // Simulação de dados de autenticação (substitua pela sua lógica real)
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  login(credentials: any): Promise<boolean> {
    // Aqui você faria a chamada para o seu backend para autenticar o usuário
    // e obter suas informações (incluindo o role).
    return new Promise((resolve) => {
      // Simulação de login bem-sucedido com base no email (para demonstração)
      if (credentials.email === 'usuario@exemplo.com') {
        this.user = { isAuthenticated: true, role: 'usuario' };
      } else if (credentials.email === 'shop@exemplo.com') {
        this.user = { isAuthenticated: true, role: 'shop' };
      } else if (credentials.email === 'admin@exemplo.com') {
        this.user = { isAuthenticated: true, role: 'admin' };
      } else {
        this.user = { isAuthenticated: false, role: null };
        resolve(false);
        return;
      }
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      resolve(true);
    });
  }

  logout(): void {
    this.user = { isAuthenticated: false, role: null };
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.user.isAuthenticated;
  }

  getUserRole(): string | null {
    return this.user.role;
  }

  hasRole(role: 'usuario' | 'shop' | 'admin'): boolean {
    return this.isAuthenticated() && this.getUserRole() === role;
  }
}
