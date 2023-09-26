"use strict";
class ContaBancaria {
    constructor(numeroConta, saldo, nomeTitular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.nomeTitular = nomeTitular;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(numeroConta, saldo, nomeTitular, limiteChequeEspecial) {
        super(numeroConta, saldo, nomeTitular);
        this.limiteChequeEspecial = 0;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
        //this.saldo += valor; // faz a mesma coisa do codigo acima
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais");
    }
    sacar(saque) {
        if ((this.saldo + this.limiteChequeEspecial) >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo);
        }
        else {
            console.log("saque nao realizado ");
        }
    }
    consultarSaldo() {
        return this.saldo + this.limiteChequeEspecial;
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(numeroConta, saldo, nomeTitular) {
        super(numeroConta, saldo, nomeTitular);
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais");
    }
    sacar(saque) {
        if (this.saldo >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo);
        }
        else {
        }
        console.log("saque nao realizado ");
    }
    consultarSaldo(saldo) {
        return this.saldo;
    }
    calcularRendimentoAnual(taxa) {
        return this.saldo + ((taxa * this.saldo) / 100);
    }
}
class ContaInvestimento extends ContaBancaria {
    constructor(numeroConta, saldo, nomeTitular) {
        super(numeroConta, saldo, nomeTitular);
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais");
    }
    sacar(saque) {
        if (this.saldo >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo);
        }
        else {
            console.log("saque nao realizado ");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
    investir(valor, prazoMeses, taxaJuros) {
        console.log("" + valor * prazoMeses * taxaJuros);
    }
}
const contaDaAna = new ContaCorrente("123", 5000, "ana", 1000);
console.log(contaDaAna.consultarSaldo());
console.log(contaDaAna.depositar());
console.log(contaDaAna.sacar());
