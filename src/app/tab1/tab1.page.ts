import { Component, OnInit } from '@angular/core';
import {ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  constructor(public produtosService: ProdutosService) {}

  ngOnInit(){
    console.log('ON INIT')

    this.produtosService.listarProdutos().subscribe(resultado => {
      console.log(resultado);
    })
  }

}
