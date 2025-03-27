import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../interface/login-request.model';
import { LoginResponse } from '../../interface/login-response.model';
import { User } from '../../interface/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `http://localhost:3000/login`;
  constructor(private http: HttpClient) {}


// Método para autenticar o usuário
login(credentials: LoginRequest): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(this.apiUrl, credentials);
}

// Método para armazenar o token no localStorage (opcional)
storeToken(token: string): void {
  localStorage.setItem('authToken', token);
}


// Método para verificar se o usuário está autenticado
isAuthenticated(): boolean {
  return localStorage.getItem('authToken') !== null;
}

// Método para obter o usuário logado
getUserFromToken(): User | null {
  const token = localStorage.getItem('authToken');
  if (token) {
    // Você pode decodificar o token JWT aqui e extrair as informações do usuário
    // Por exemplo, usando uma biblioteca como jwt-decode
    return JSON.parse(atob(token.split('.')[1])); // Isso é apenas um exemplo, seu token pode variar
  }
  return null;
}
}
