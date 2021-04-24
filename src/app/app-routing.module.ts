import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { HomeComponent } from './components/home/home.component';

//import { from } from 'rxjs';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'produtos', component: ListarProdutosComponent},
  {path:'produtos/cadastrar', component: CadastrarProdutosComponent},
  {path:'produtos/atualizar/:id', component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
