const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";
    geteNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.geteNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome: string; duracao: number}[] = [];
    
    adicionarExercicios(nome: string, duracao:number): void{
        this.rotina.push({nome, duracao});
        }
        calcularTempoTotal(): number{
            let soma = 0;
            this.rotina.forEach(item => soma += item.duracao);

            return soma;
        }
}
treinadorPessoal.adicionarExercicios("corrida", 30);
treinadorPessoal.adicionarExercicios("Flexoes", 15);
treinadorPessoal.adicionarExercicios("Agachamento", 20);
console.log("Tempo total necessario para a rotina:" +
treinadorPessoal.calcularTempoTotal()+" em minutos ");