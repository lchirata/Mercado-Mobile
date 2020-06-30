import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service'
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  pedidos = new Array<Pedido>();

  // pedidos = [
  //   {
  //     dataTexto: 'Dom - 03 de fevereiro de 2019',
  //     ongLogo: './avatar-finn.png',
  //     ongNome: 'Habibs',
  //     status: 'Pedido Entregue',
  //     id: '4812',
  //     produtos: [
  //       {
  //         nome: 'Esfirra de Carne',
  //         quantidade: 8,
  //       }, {
  //         nome: 'Kibe frito',
  //         quantidade: 2,
  //       }, {
  //         nome: 'Esfirra de Queijo',
  //         quantidade: 6,
  //       }
  //     ]
  //   }, {
  //     dataTexto: 'Dom - 03 de fevereiro de 2019',
  //     ongLogo: './avatar-finn.png',
  //     ongNome: 'Habibs',
  //     status: 'Pedido Entregue',
  //     id: '4812',
  //     produtos: [
  //       {
  //         nome: 'Esfirra de Carne',
  //         quantidade: 8,
  //       }, {
  //         nome: 'Kibe frito',
  //         quantidade: 2,
  //       }, {
  //         nome: 'Esfirra de Queijo',
  //         quantidade: 6,
  //       }
  //     ]
  //   }
  // ]
  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.listarPedidos();
  }

  listarPedidos(){
    this.clienteService.listarProdutoDoCliente(1).subscribe(arrayDePedidos => {
      for (const pedido of arrayDePedidos) {
        let p = new Pedido();
        p = pedido;
        p.ongNome = "Ragazzo";
        p.status = "Pedido entregue";
        this.pedidos.push(p);
      }
    });
  }

  irParaDetalhesPedido(pedido: any){
    console.log(pedido);
  }
}
