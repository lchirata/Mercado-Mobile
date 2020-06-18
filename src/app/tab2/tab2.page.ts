import { Component } from '@angular/core';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pedidos = [
    {
      dataTexto: 'Dom - 03 de fevereiro de 2019',
      ongLogo: './avatar-finn.png',
      ongNome: 'Habibs',
      status: 'Pedido Entregue',
      id: '4812',
      produtos: [
        {
          nome: 'Esfirra de Carne',
          quantidade: 8,
        }, {
          nome: 'Kibe frito',
          quantidade: 2,
        }, {
          nome: 'Esfirra de Queijo',
          quantidade: 6,
        }
      ]
    }, {
      dataTexto: 'Dom - 03 de fevereiro de 2019',
      ongLogo: './avatar-finn.png',
      ongNome: 'Habibs',
      status: 'Pedido Entregue',
      id: '4812',
      produtos: [
        {
          nome: 'Esfirra de Carne',
          quantidade: 8,
        }, {
          nome: 'Kibe frito',
          quantidade: 2,
        }, {
          nome: 'Esfirra de Queijo',
          quantidade: 6,
        }
      ]
    }
  ]



  constructor() { }

  ngOnInit() {

  }
}
