import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
  ) {}

  isLogado:boolean = false;


  ngOnInit() {
    this.isLogado = this.authService.isLogado(); // Obtém o estado de autenticação ao carregar o componente
  }

  onEntrar() {
    this.isLogado = this.authService.isLogado();
    console.log("Estado após login:", this.isLogado);
  }

  onSair() {
    this.authService.logout();
    this.isLogado = false; // Atualiza a variável para refletir a mudança
    console.log("Usuário deslogado:", this.isLogado);
  }
}





