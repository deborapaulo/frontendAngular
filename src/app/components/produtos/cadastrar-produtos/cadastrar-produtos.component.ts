import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null

  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-sucess'
        );
        this.router.navigate(['/produto']);
    });

  }


}
