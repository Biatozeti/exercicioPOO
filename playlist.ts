class musica{
    titulo: string;
    artista: string;
    duracao: number;

    constructor(titulo: string, artista: string, duracao: number){
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}

class playlist{
    private musicas: musica[] = [];
    private reproduzindo: boolean = false;
    private indiceAtual: number = 0;

    constructor(){

    }
    adicionarmusica(musica: musica){
        this.musicas.push(musica);
    }
    reproduzir(){
        if(this.musicas.length > 0){
            this.reproduzindo = true;
            return "reproduzindo :" 
            + this.musicas[this.indiceAtual].titulo + '-'
            + this.musicas[this.indiceAtual].artista;

        }
        else{
            return "A playlist está vazia";
        }
    }
pausar(){
    if(this.reproduzindo == true){
        this.reproduzindo = false;
        return "musica pausada";

    }
    else{
        return "nenhuma musica esta sendo reproduzida";
    }
}
proxima(){
    if(this.musicas.length > 0){
        this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
        return this.reproduzir();

    }
    else{
        return "A playlist esta vazia";
    }
}
}

const musica1 = new musica("Vai namorar comigo sim",
"Henrique e Juliano", 300);

const musica2 = new musica("Alo porteiro",
"marilia mendonça",200);

const musica3 = new musica( "yellow","coldplay",100);

const minhaplaylist = new playlist();
minhaplaylist.adicionarmusica(musica1);
minhaplaylist.adicionarmusica(musica2);
minhaplaylist.adicionarmusica(musica3);
console.log(minhaplaylist.reproduzir());
console.log(minhaplaylist.pausar());
console.log(minhaplaylist.proxima());
console.log(minhaplaylist.proxima());
console.log(minhaplaylist.proxima());

