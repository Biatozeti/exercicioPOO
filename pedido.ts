enum StatusPedido{
    Aguardando =  "Aguardando Preparo",
     Preparo = "Em Preparo",
     Entrega = "Saiu Para Entrega",
     Entregue = "Pedido Entregue"

}

class ProdutoPedido{
    nome: string;
    valor: number;
    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido{
 private produtos: ProdutoPedido[];
 private status: StatusPedido;

 constructor(){
    this.produtos= [];
    this.status = StatusPedido.Aguardando;
 }

 adicionarProduto(produtos: ProdutoPedido){
    this.produtos.push(produtos);
 }

 atualizarStatus(status: StatusPedido){
    this.status = status;
 }
exibirStatus(){
    return this.status
}
exibirProdutoDoPedido(){
    console.log("exibir produto")
    for (let i=0; i< this.produtos.length; i ++){
        console.log("exibir produto : " +this.produtos[i].nome+ " tem o preco de "  +this.produtos[i].valor);
    }
}


    }

 


let produtoP1 = new ProdutoPedido('Short'  , 30);
let produtoP2 = new ProdutoPedido('camiseta' , 50);
let produtoP3= new ProdutoPedido('chinelo', 60);




const meuPedido  = new Pedido();
meuPedido.adicionarProduto(produtoP1);
meuPedido.adicionarProduto(produtoP2);
meuPedido.adicionarProduto(produtoP3);
console.log("Statuando atual do pedido:"+meuPedido.exibirStatus());
meuPedido.atualizarStatus(StatusPedido.Aguardando);
console.log("Statuando atual do pedido: "+meuPedido.exibirStatus());
meuPedido.exibirProdutoDoPedido();