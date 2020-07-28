import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service'
import { Pedido } from '../models/Pedido';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
 
  pedidos = new Array<Pedido>();

  ionViewDidEnter() {
    this.listarPedidos();
  }
  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.listarPedidos();
  }

  listarPedidos(){
    this.pedidos = new Array<Pedido>();
    const idCliente = this.pegaClienteIdLogado();

    this.clienteService.listarProdutoDoCliente(idCliente).subscribe(arrayDePedidos => {
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

  pegaClienteIdLogado(){
    return new Cliente().getId();
  }
}
