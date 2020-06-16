import { Component, OnInit } from '@angular/core';

import { ClientesService} from '../services/clientes.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {}

  login(){
    console.log('Login');

    this.clientesService.login(this.email, this.senha).subscribe(response => {
      this.irParaLoja();
    }, erro => {
      const mensagem = erro.error.mensagem;
      this.mensagem(mensagem);
    })
  }

  mudaEmail(event) {
    this.email = event.detail.value;
  }

  mudaSenha(event) {
    this.senha = event.detail.value;
  }

  async mensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

  irParaLoja() {
    this.router.navigate(['/loja/tabs/tab1']);
  }


}
