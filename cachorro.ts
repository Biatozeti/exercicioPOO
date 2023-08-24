class Cachorro{
    nome: string;
    raça: string;
    idade:number;


    constructor(nome: string, raça: string, idade: number){
        this.nome = nome;
        this.raça = raça;
        this.idade = idade;

    }

    apresentar(){
        return " oii, Em eu sou "  + this.nome +  " um " +  this.raça +  " de "  +  this.idade +  " anos ";
    }

    apresentarPara(humano: string){
        return " oii, " + humano + " eu sou " + this.nome +  " um " +  this.raça +  " de "  +  this.idade +  " anos ";
    }
    
    


    
}

let Renan = new Cachorro("Renan", "Vira-lata", 16);
let Sara = new Cachorro("Sara", "pinscher", 16);

console.log(Renan.nome);
console.log(Sara.nome);
console.log(Renan.apresentar());
console.log(Sara.apresentar());
console.log(Renan.apresentarPara('Emilly'));



