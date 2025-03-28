import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'; // Importe o Router do @angular/router (CORRETO)

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Entrar = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}


  onSubmit() {
    if (this.Entrar.valid) {
      const credentials = this.Entrar.value;
      this.authService.login(credentials).subscribe({
        next: (success) => {
          if (success) {
            const role = this.authService.getUserRole();
            if (role === 'usuario') {
              this.router.navigate(['/usuario']);
            } else if (role === 'shop') {
              this.router.navigate(['/shop']);
            } else if (role === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/']); // Rota padrão
            }
          } else {
            this.errorMessage = 'Credenciais inválidas.';
          }
        },
        error: (error) => {
          console.error('Erro no componente de login:', error);
          this.errorMessage = 'Erro ao fazer login.';
        }
      });
    }
  }


  logout() {
    this.authService.logout();
  }

  onEntrar() {
    console.log("MANDANDO OS DADOS PARA O SERVIDOR");
    console.warn(this.Entrar.value);
    this.onSubmit();
  }

  onCadastro() {
    console.log("ENTRANDO NA PÁGINA DE CADASTRO");
    this.router.navigate(['/cadastro']);
  }
}
