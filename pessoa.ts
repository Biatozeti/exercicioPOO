class Pessoa {
    nome: string;
    idade: number;
    Comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.Comidas = comidas;
    }

    cumprimentar() {
        let msghabilitacao = " já posso tirar minha CNH ";
        if (this.idade < 18) {
            msghabilitacao = " não posso tirar minha CNH ";
        }

        return "olá meu nome é  " + this.nome +
            " e tenho " + this.idade + " anos " + msghabilitacao + "."

    }

    comidasFavoritas(){
        console.log("minha(s) comida(s) favorita(s)");
        for( let i=0; i< this.Comidas.length; i ++) {
            console.log(this.Comidas[i]);
        }
    }
    

}

let pessoa1 =new Pessoa("Bia", 17 , [ " batata frita", "Gelatina "]);
    console.log(pessoa1.cumprimentar());
   console.log(pessoa1.comidasFavoritas()); 





