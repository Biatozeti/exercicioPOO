class banco {
    nome: string;
    saldo: number;

    constructor(Nome: string, saldo: number,) {
        this.nome = Nome;
        this.saldo = saldo;
    }

    depositar(deposito : number) {
        
        this.saldo= this.saldo + deposito;
       return this.nome +  " depositou " + deposito  + " reais" + " depois ele ficou com um valor de " + this.saldo + " reais ";
     
    }
 sacar(saque : number){
    if(this.saldo > saque)
{
    this.saldo = this.saldo - saque;
    return " saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é "  + this.saldo;
}
    else{
    }
        return "saque nao realizado "
    
 }
 consultar(){
    return " o saldo atual de  é de R$:"+this.saldo
 }
  
}


let banco1 = new banco("João", 1500,);
console.log(banco1.consultar());
console.log(banco1.depositar(500));
console.log(banco1.sacar(100));
console.log(banco1.consultar());


let banco2 = new banco("Julia", 2000,);
console.log(banco2.consultar());
console.log(banco2.depositar(200));
console.log(banco2.sacar(200));
console.log(banco2.consultar());

let banco3 = new banco("Jorge", 2000,);
console.log(banco3.consultar());
console.log(banco3.depositar(200));
console.log(banco3.sacar(200));
console.log(banco3.consultar());



