export class Pedido {

    id: string | number;
    data: string;
    ongLogo: string;
    ongNome: string;
    status: string;

    produtos: Array<Produto>;

    constructor() {
        this.produtos = new Array<Produto>();
    }
}

class Produto {
    nome: string;
    quantidade: number;
}