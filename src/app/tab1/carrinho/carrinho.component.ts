import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  fecharResumo(){
    this.modalController.dismiss({
      dismissed: true
    })
  }
}
