import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of, map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface User {
  isAuthenticated: boolean;
  role: 'usuario' | 'shop' | 'admin' | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User>({ isAuthenticated: false, role: null });
  public user$ = this.userSubject.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Tenta carregar o estado do usuário do localStorage apenas no navegador
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.userSubject.next(JSON.parse(storedUser));
      }
    }
  }

  isLogado(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('currentUser'); // Verifica apenas se estiver no navegador
    }
    return false;
  }


  login(credentials: any): Observable<boolean> {
    console.log('login - auth fui chamado!', credentials);
    return this.http.post<any>('http://localhost:3000/login', credentials).pipe(
      tap((response) => {
        console.log('Resposta do servidor (login):', response);
        const user: User = { isAuthenticated: true, role: response.role };
        this.userSubject.next(user);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      map(() => true),
      catchError((error) => {
        console.error('Erro ao fazer login:', error);
        this.userSubject.next({ isAuthenticated: false, role: null });
        return of(false);
      })
    );
  }

  logout(): void {
    this.userSubject.next({ isAuthenticated: false, role: null });
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.userSubject.value.isAuthenticated;
  }

  getUserRole(): string | null {
    return this.userSubject.value.role;
  }

  hasRole(role: 'usuario' | 'shop' | 'admin'): boolean {
    return this.isAuthenticated() && this.getUserRole() === role;
  }
}
