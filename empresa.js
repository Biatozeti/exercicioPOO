"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor() {
        super(" Craudio", 1000);
    }
    calcularSalarioMensal() {
        // console.log( " o salario do " + this.nome  + " é de " + (this.salario += (10*this.salario)/100)+ " reais")
        return (this.salario += (10 * this.salario) / 100);
    }
}
class Desenvolvedor extends Funcionario {
    constructor() {
        super("Alexsander", 5000);
    }
    calcularSalarioMensal() {
        //console.log( " o salario do " + this.nome + " é de " +  (this.salario)+ " reais")
        return (this.salario);
    }
}
const Craudio = new Gerente();
console.log(" o salario do " + Craudio.nome + " é de " + Craudio.calcularSalarioMensal() + " reais");
const Alexsander = new Desenvolvedor();
console.log(" o salario do " + Alexsander.nome + " é de " + Alexsander.calcularSalarioMensal() + " reais");
