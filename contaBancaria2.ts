abstract class ContaBancaria {
    protected numeroConta: string;
    protected saldo: number;
    protected nomeTitular: string;


    constructor(numeroConta: string, saldo: number, nomeTitular: string,) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.nomeTitular = nomeTitular;
    }
    abstract depositar(valor: number): void

    abstract sacar(saque: number): void

    abstract consultarSaldo(saldo: number): number
}


class ContaCorrente extends ContaBancaria {
    protected limiteChequeEspecial: number = 0;

    constructor(numeroConta: string, saldo: number, nomeTitular: string, limiteChequeEspecial: number) {
        super(numeroConta, saldo, nomeTitular);

        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
        //this.saldo += valor; // faz a mesma coisa do codigo acima
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais");
    }

    sacar(saque: number): void {
        if ((this.saldo + this.limiteChequeEspecial) >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo;)
        }
        else {
            console.log("saque nao realizado ")
        }

    }
    consultarSaldo(): number {
        return this.saldo + this.limiteChequeEspecial
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor(numeroConta: string, saldo: number, nomeTitular: string) {
        super(numeroConta, saldo, nomeTitular);


    }
    depositar(valor: number): void {
        this.saldo = this.saldo+ valor;
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais")

    }

    sacar(saque: number): void {
        if (this.saldo >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo);
        }
        else {
        }
        console.log("saque nao realizado ")

    }

    consultarSaldo(saldo: number): number {
        return this.saldo
    }


    calcularRendimentoAnual(taxa: number): number {
        return this.saldo + ((taxa * this.saldo) / 100);
    }
}

class ContaInvestimento extends ContaBancaria {
    constructor(numeroConta: string, saldo: number, nomeTitular: string,) {
        super(numeroConta, saldo, nomeTitular);
    }
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(" o saldo do " + this.nomeTitular + " é de " + this.saldo + "  reais")

    }

    sacar(saque: number): void {
        if (this.saldo >= saque) {
            this.saldo = this.saldo - saque;
            console.log(" saque de R$: " + saque + " foi realizado com sucesso,seu novo saldo é " + this.saldo);
        }
        else {
            console.log("saque nao realizado ")
        }
    }

    consultarSaldo(): number {
        return this.saldo
    }
    investir(valor: number, prazoMeses: number, taxaJuros: number): void{
        console.log(""+ valor* prazoMeses* taxaJuros)
    }

}


const contaDaAna = new ContaCorrente("123",5000,"ana",1000);
console.log(contaDaAna.consultarSaldo());
console.log(contaDaAna.depositar());
console.log(contaDaAna.sacar());




