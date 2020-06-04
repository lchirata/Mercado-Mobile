import { Produto } from './Produto';

export class Carrinho {

    private produtos: Array < Produto >

        constructor() {
        this.produtos = Array<Produto>();
    }

    adicionarNoCarrinho(produto: Produto) {
        this.produtos.push(produto);
    }

    excluirDoCarrinho(produto: Produto) {
        this.produtos = this.produtos.filter(item => item.id !== produto.id);
    }

    resumoCompra() {
        return this.produtos;
    }

    numeroDeProdutos() {
        return this.produtos.length;
    }



}

