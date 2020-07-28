export class Cliente {

    private static instance: Cliente;

    id: string | number;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
    telefone: string;

    constructor() {

}
setId(idCliente: any){
    return localStorage.setItem('idCliente', idCliente);
}
getId(){
    return localStorage.getItem('idCliente');
}

}
