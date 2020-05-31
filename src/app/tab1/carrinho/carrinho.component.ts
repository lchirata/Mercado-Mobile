import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: Array<any>;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.carrinho);
  }

  fecharResumo(){
    this.modalController.dismiss({
      dismissed: true
    })
  }

  excluirProduto(produto: any){
    console.log(produto);
    this.carrinho = this.carrinho.filter(item => item.id != produto.id);
  }
}
