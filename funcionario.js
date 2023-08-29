"use strict";
class funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    calcular() {
        return "oii eu sou " + this.nome + "meu cargo é " + this.cargo + "e meu salario é " + this.salario;
    }
    aumento(aumento) {
        return " com um aumento  de " + aumento + "% " + "ira ficar " + (this.salario + (aumento * this.salario) / 100) + " reais";
    }
}
