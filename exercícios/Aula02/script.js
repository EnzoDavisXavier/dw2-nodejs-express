class Heroi {

    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return this.nome + " está correndo.";
    }

    andar() {
        return this.nome + " está andando.";
    }

    atacar() {
        return this.nome + " está atacando.";
    }

    defender() {
        return this.nome + " está se defendendo.";
    }
}


let homemAranha = new Heroi("Homem-Aranha", 100, 90, 80);

homemAranha.teia = 1;

homemAranha.sentidoAranha = function() {
    return this.nome + " detectou perigo com seu sentido-aranha!";
};


let superman = new Heroi("Superman", 150, 100, 150);

superman.podeVoar = 1;

superman.visaoCalor = function() {
    return this.nome + " está usando sua visão de calor!";
};


let batman = new Heroi("Batman", 100, 70, 90);

batman.esconder = 1;

batman.investigar = function() {
    return this.nome + " está investigando um crime!";
};


document.write("<h1>Fábrica de Heróis</h1>");

document.write("<h2>Homem-Aranha</h2>");
document.write("<p>Nome: " + homemAranha.nome + "</p>");
document.write("<p>Vida: " + homemAranha.vida + "</p>");
document.write("<p>Velocidade: " + homemAranha.velocidade + "</p>");
document.write("<p>Força: " + homemAranha.forca + "</p>");
document.write("<p>Teia: " + homemAranha.teia + "</p>");
document.write("<p>" + homemAranha.sentidoAranha() + "</p>");
document.write("<p>" + homemAranha.atacar() + "</p>");


document.write("<h2>Superman</h2>");
document.write("<p>Nome: " + superman.nome + "</p>");
document.write("<p>Vida: " + superman.vida + "</p>");
document.write("<p>Velocidade: " + superman.velocidade + "</p>");
document.write("<p>Força: " + superman.forca + "</p>");
document.write("<p>Pode voar: " + superman.podeVoar + "</p>");
document.write("<p>" + superman.visaoCalor() + "</p>");
document.write("<p>" + superman.defender() + "</p>");


document.write("<h2>Batman</h2>");
document.write("<p>Nome: " + batman.nome + "</p>");
document.write("<p>Vida: " + batman.vida + "</p>");
document.write("<p>Velocidade: " + batman.velocidade + "</p>");
document.write("<p>Força: " + batman.forca + "</p>");
document.write("<p>Esconder: " + batman.esconder + "</p>");
document.write("<p>" + batman.investigar() + "</p>");
document.write("<p>" + batman.correr() + "</p>");