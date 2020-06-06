import { Produto } from './Produto';
import { ChildActivationStart } from '@angular/router';

export class Carrinho {

    private produtos: Array < Produto >

        constructor() {
        this.produtos = Array<Produto>();
    }

    adicionarNoCarrinho(produto: Produto) {
        const produtoExiste =  this.produtos.find(item => item.id === produto.id);

        if (produtoExiste){
            produtoExiste.quantidade += 1;
            console.log(produtoExiste.quantidade);
        } else {
            produto.quantidade = 1;
            this.produtos.push(produto);  
        }
    }

    excluirDoCarrinho(produto: Produto) {
        const produtoExiste = this.produtos.find(item => item.id === produto.id)

        if (produtoExiste.quantidade > 1){
            produtoExiste.quantidade -= 1;
        }else{
            this.produtos = this.produtos.filter(item => item.id != produto.id);
        }   
    }

    resumoCompra() {
        return this.produtos;
    }

    numeroDeProdutos() {
        return this.produtos.length;
    }
    
    valorTotal(){
        // const total = this.produtos.reduce((acc, cur) => {
        //     return acc + (cur.preco * cur.quantidade)
        //     }, 0)
        //     return total.toFixed(2);
        let total = 0;
        for(let produto of this.produtos){
            const preco = produto.preco;
            const quantidade = produto.quantidade;
            total += (preco * quantidade);
        }
        return total.toFixed(2);
    }
}

