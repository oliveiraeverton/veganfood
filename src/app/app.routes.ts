import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroAlimentosComponent } from './pages/cadastro-alimentos/cadastro-alimentos.component';
import { CadastroShopComponent } from './pages/cadastro-shop/cadastro-shop.component';
import { Error404Component } from './pages/error404/error404.component';
import { ListaDeComprasComponent } from './pages/lista-de-compras/lista-de-compras.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'cadastro-alimentos',
    component: CadastroAlimentosComponent
  },
  {
    path: 'cadastro-shop',
    component: CadastroShopComponent
  },
  {
    path: 'lista-de-compras',
    component: ListaDeComprasComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: Error404Component
  },
  { path: 'usuario', component: UsuarioComponent, canActivate: [] }, // Rota protegida para usuários comuns
  { path: 'shop', component: ShopComponent, canActivate: [] },       // Rota protegida para usuários com acesso à loja
  { path: 'admin', component: AdminComponent, canActivate: [] },       // Rota protegida para administradores

];
