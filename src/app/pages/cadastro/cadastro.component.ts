import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core'; // Remova Injectable aqui
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CadastroUser } from '../../../interface/cadastroUser';
@Injectable({
  providedIn: 'root'
})
@Component({ // Mantenha o decorador @Component
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
  cadastro:CadastroUser = {email: '', password: '', nome: ''};
  cadastroForm = new FormGroup({
    nome: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });




  onSubmit() {
    console.log('onSubmit chamado!');
    console.warn(this.cadastroForm.value);

    this.http.post('http://localhost:3000/cadastro', this.cadastroForm.value)
      .subscribe(
        (response) => {
          console.log("Resposta do servidor:", response);
          // Aqui você pode adicionar a lógica para lidar com a resposta bem-sucedida,
          // como exibir uma mensagem para o usuário ou redirecioná-lo.
        },
        (error) => {
          console.error("Erro ao enviar os dados:", error);
          // Aqui você pode adicionar a lógica para lidar com erros,
          // como exibir uma mensagem de erro para o usuário.
        }
      );
  }
    // return this.http.post('http://localhost:3000/cadastro', this.cadastroForm.value);

  onPrevious() {
    console.log("VOLTANDO PARA A PÁGINA ANTERIOR");
  }


}
