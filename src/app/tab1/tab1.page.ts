import { Component, OnInit } from '@angular/core';
import {ProdutosService } from '../services/produtos.service';
import { CarrinhoComponent} from './carrinho/carrinho.component';
import { ModalController} from '@ionic/angular';
import { Produto } from '../models/Produto';
import { Carrinho } from '../models/Carrinho';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  produtos = Array<Produto>();
  carrinho = new Carrinho();
  
  constructor(
    public produtosService: ProdutosService,
    public modalController: ModalController
    ) {}

  ngOnInit(){
    this.produtosService.listarProdutos().subscribe(resultado => {
    this.produtos = resultado;
    })
  }

  adicionarNoCarrinho(produto: Produto){
    this.carrinho.adicionarNoCarrinho(produto);
  }

  teclaDigita(event: any){
    console.log(event.detail.value);
  }

  async resumoCompra(){
    const modal = await this.modalController.create({
      component: CarrinhoComponent,
      cssClass: 'modal',
      componentProps:{
        carrinho: this.carrinho,
      }
    });
    return await modal.present();
  }
}