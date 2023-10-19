class ProdutoLoja{
    nome: string;
    preco: number;
    constructor(nomeDoProduto: string, precoDoProduto:number){
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
    }
    
    class CarrinhoDeCompras{
     produtosDoCarrinho: ProdutoLoja[];
     constructor() {
        this.produtosDoCarrinho = [];
     }
    
     adicionarProduto(produto: ProdutoLoja){
        this.produtosDoCarrinho.push(produto);
     }
    
     excluirProduto(nomeDoProduto:string){
        this.produtosDoCarrinho=this.produtosDoCarrinho.filter((item) =>item.nome !==nomeDoProduto);
     }
    
     calcularValorTotal(){
        let soma = 0;
        for (let i =0; i< this.produtosDoCarrinho.length; i++){
    soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
     }

     exibirProduto(){
        console.log("Produto do Carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++){
            console.log("Produto: " + this.produtosDoCarrinho[i].nome+ "R$" + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
     }
    
    }
    
    class Loja{
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompra = new CarrinhoDeCompras();
    
    constructor(){
    
    }
    
    adicionarProdutoAoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque.push(produto);
    }
    
    removerProdutoDoEstoque(produto:ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !==produto.nome)
    
    }
    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item =>item.nome == produto.nome);
        if (produtoEncontrado){
            this.carrinhoDeCompra.adicionarProduto(produto);
            return "produto adicionado ao carrinho de compra";
        }
        else{
            return "Produto não encontrado ao estoque da loja";
        }
    }
    
    removerProdutoDoCarrinho(produto: ProdutoLoja){
        this.carrinhoDeCompra.excluirProduto(produto.nome);
        
    }

    exibirProdutosDoCarrinho(){
        this.carrinhoDeCompra.exibirProdutos();
        
    }
    }

    const produtoLoja1 = new ProdutoLoja("Camiseta",29.99);
    const produtoLoja2 = new ProdutoLoja("Calça",49.99);
    const produtoLoja3 = new ProdutoLoja("Sapato",79.99);
    const produtoLoja4 = new ProdutoLoja("meia",20.99);


    //Criando loja
const minhaLoja = new Loja();

//adicionando produto ao Estoque

minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);

//adicionando produto ao carrinho

minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);

//remover Produto do Carrinho de Compra
minhaLoja.removerProdutoDoCarrinho(produtoLoja1);

//remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(produtoLoja1);

//exibindo Produto do Carrinho de Compra
minhaLoja.exibirProdutosDoCarrinho();

//exibindo valor total do carrinho
console.log("total de carrinho de compra: R$"
+minhaLoja.carrinhoDeCompra.calcularValorTotal());