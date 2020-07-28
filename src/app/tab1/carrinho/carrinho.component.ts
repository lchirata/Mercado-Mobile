import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto } from 'src/app/models/Produto';
import { Carrinho } from 'src/app/models/Carrinho';
import { ProdutosService } from '../../services/produtos.service';
import { PedidosService } from '../../services/pedidos.service';
import { ToastController } from '@ionic/angular';
import { Cliente } from 'src/app/models/Cliente';




@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: Carrinho;

  constructor(
    public modalController: ModalController,
    public produtosService: ProdutosService,
    public pedidosService: PedidosService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log(this.carrinho);
  }

  fecharResumo() {
    this.modalController.dismiss({
      dismissed: true
    })
  }

  excluirProduto(produto: Produto) {
    console.log(produto);
    this.carrinho.excluirDoCarrinho(produto);
  }

  comprar() {
    const produtos = this.carrinho.resumoCompra();
    const idCliente = this.pegaClienteIdLogado();

    if (!idCliente) {
      this.presentToastErroLogin();
    }
    const compra = {
      id_cliente: idCliente,
      produtos,
    }

    console.log(compra);

    this.pedidosService.comprar(compra).subscribe(response => {
      this.fecharResumo();
      this.presentToastComprado();
      this.carrinho.esvaziarCarrinho();
    });
    // const compras = this.carrinho.resumoCompra(); 
    // this.fecharResumo();
    // this.presentToast();

    // this.produtosService.comprar(compras).subscribe(response => {
    // console.log('OK')
    // })

  }
  async presentToastComprado() {
    this.presentToast('Compra efetuada!', 2500);
    }
    
    async presentToastErroLogin() {
    this.presentToast('Faça login para efetuar a compra!');
    }
    
    async presentToast(message, duration = 2000) {
    const toast = await this.toastController.create({
    message,
    duration,
    });
    toast.present();
    }


  pegaClienteIdLogado() {
    return new Cliente().getId();
  }

}
