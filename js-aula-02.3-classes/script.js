// CLASSE NO JAVASCRIPT
class Carro {
    // Nome de classes devem iniciar com a primeira letra maúscula

    //ATRIBUTOS
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // MÉTODOS
    buzinar() {
        return "Beep! Bepp!";
    }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
// Acessando os ATRIBUTOS e MÉTODOS do objeto
document.write(`
    <p>O carro ${carroPopular.marca}, modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando ele buzina faz ${carroPopular.buzinar()}</p>
    `);

const carroEsportivo = new Carro("Ferrari", "Spider", "2026");
document.write(`
    <p>O carro ${carroEsportivo.marca}, modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e quando ele buzina faz ${carroEsportivo.buzinar()}</p>
    `);