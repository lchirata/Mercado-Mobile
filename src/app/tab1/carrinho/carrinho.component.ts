import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto } from 'src/app/models/Produto';
import { Carrinho } from 'src/app/models/Carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: Carrinho;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.carrinho);
  }

  fecharResumo(){
    this.modalController.dismiss({
      dismissed: true
    })
  }

  excluirProduto(produto: Produto){
    console.log(produto);
    this.carrinho.excluirDoCarrinho(produto);
  }
}
