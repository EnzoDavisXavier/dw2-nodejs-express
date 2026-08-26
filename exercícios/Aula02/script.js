class Heroi{
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return "${nome} está correndo"
    }
    andar(){
        return "${nome} está andando"
    }
    atacar(){
        return "${nome} está atacando"
    }
    defender(){
        return "${nome} está se defendendo"
    }
}