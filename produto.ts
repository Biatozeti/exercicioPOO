class produto {
    nome : string;
    valor: number;
    



    constructor(nome: string, valor: number,  ){
        this.nome = nome;
        this.valor = valor;
     
    }
    
    apresentar(){
        return " o produto " + this.nome + " tem um valor de " + this.valor + " reais" ;

}
    apresentardesconto(desconto: number){
        return  " com um desconto de " + desconto + "% " + "ira ficar " +  (this.valor -(desconto*this.valor)/100)+ " reais";
     }

     
     


}

let produto1 = new produto("vestido", 50,);
     console.log(produto1.apresentar());
     console.log(produto1.apresentardesconto(5));

     let produto2 = new produto("Cropped", 150);
     console.log(produto2.apresentar());
     console.log(produto2.apresentardesconto(10));

     let produto3 = new produto("Cachorro", 5000);
     console.log(produto3.apresentar());
     console.log(produto3.apresentardesconto(30));

