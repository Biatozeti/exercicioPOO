"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = "Aguardando Preparo";
    StatusPedido["Preparo"] = "Em Preparo";
    StatusPedido["Entrega"] = "Saiu Para Entrega";
    StatusPedido["Entregue"] = "Pedido Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.Aguardando;
    }
    adicionarProduto(produtos) {
        this.produtos.push(produtos);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutoDoPedido() {
        console.log("exibir produto");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("exibir produto : " + this.produtos[i].nome + " tem o preco de " + this.produtos[i].valor);
        }
    }
}
let produtoP1 = new ProdutoPedido('Short', 30);
let produtoP2 = new ProdutoPedido('camiseta', 50);
let produtoP3 = new ProdutoPedido('chinelo', 60);
const meuPedido = new Pedido();
meuPedido.adicionarProduto(produtoP1);
meuPedido.adicionarProduto(produtoP2);
meuPedido.adicionarProduto(produtoP3);
console.log("Statuando atual do pedido:" + meuPedido.exibirStatus());
meuPedido.atualizarStatus(StatusPedido.Aguardando);
console.log("Statuando atual do pedido: " + meuPedido.exibirStatus());
meuPedido.exibirProdutoDoPedido();
