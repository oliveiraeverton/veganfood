import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
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


  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  onEntrar() {
    console.log("MANDANDO OS DADOS PARA O SERVIDOR");
    console.warn(this.login.value);
  }
  onCadastro() {
    console.log("ENTRANDO NA PÁGINA DE CADASTRO");
  }

  constructor(private http: HttpClient) { }
}
