import { Component, OnInit } from '@angular/core';
import {ProdutosService } from '../services/produtos.service';
import { CarrinhoComponent} from './carrinho/carrinho.component';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  produtos = [];
  carrinho = [];
  
  constructor(
    public produtosService: ProdutosService,
    public modalController: ModalController
    ) {}

  ngOnInit(){
    this.produtosService.listarProdutos().subscribe(resultado => {
    this.produtos = resultado;
    })
  }

  adicionarNoCarrinho(produto: any){
    this.carrinho.push(produto);
  }

  teclaDigita(event: any){
    console.log(event.detail.value);
  }

  async resumoCompra(){
    const modal = await this.modalController.create({
      component: CarrinhoComponent,
      cssClass: 'modal'
    });
    return await modal.present();
  }
}