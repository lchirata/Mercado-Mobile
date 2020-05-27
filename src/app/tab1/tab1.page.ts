import { Component, OnInit } from '@angular/core';
import {ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  produtos = [];
  
  constructor(public produtosService: ProdutosService) {}

  ngOnInit(){
    this.produtosService.listarProdutos().subscribe(resultado => {
    this.produtos = resultado;
    })
  }

  adicionarNoCarrinho(produto){
    console.log(produto);
  }


  teclaDigita(event: any){
    console.log(event.detail.value);
  }

  resumoCompra(){
    console.log('resumo compra');
  }
}