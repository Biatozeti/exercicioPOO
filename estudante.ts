class estudante {
    nome: string;
    idade:number;
    notas: number[];

    constructor(nome: string, idade: number,  notas: number[]){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
     
    }

    calcularmedia(){
        let totalnotas = 0;
      let media = 0
      for(let i =0; i< this.notas.length; i++){
        totalnotas = totalnotas + this.notas [i]


      }

      media= totalnotas/this.notas.length;
      





    }
}