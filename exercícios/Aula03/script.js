
let dataAtual = new Date();


document.write("<h2>Compra Internacional</h2>");

document.write("<p><strong>Data e hora atual:</strong> " + dataAtual + "</p>");


let dia = String(dataAtual.getDate()).padStart(2, "0");
let mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
let ano = dataAtual.getFullYear();

let dataFormatada = dia + "/" + mes + "/" + ano;

document.write("<p><strong>Data atual:</strong> " + dataFormatada + "</p>");



let compraInternacional = 500.75;

let valorDolar = compraInternacional.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

document.write("<p><strong>Valor da compra:</strong> " + valorDolar + "</p>");



let cotacaoDolar = 5.50;

let valorReal = compraInternacional * cotacaoDolar;

let valorRealFormatado = valorReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

document.write("<p><strong>Valor em reais:</strong> " + valorRealFormatado + "</p>");



let dataEntrega = new Date(dataAtual);

dataEntrega.setDate(dataEntrega.getDate() + 12);

let diaEntrega = String(dataEntrega.getDate()).padStart(2, "0");
let mesEntrega = String(dataEntrega.getMonth() + 1).padStart(2, "0");
let anoEntrega = dataEntrega.getFullYear();

let dataEntregaFormatada = diaEntrega + "/" + mesEntrega + "/" + anoEntrega;

document.write("<p><strong>Data de entrega:</strong> " + dataEntregaFormatada + "</p>");



let nomeCliente = "eNzO dAvIs XaViEr";


nomeCliente = nomeCliente.toLowerCase();


let partesNome = nomeCliente.split(" ");


for (let i = 0; i < partesNome.length; i++) {
    partesNome[i] =
        partesNome[i].charAt(0).toUpperCase() +
        partesNome[i].slice(1);
}


nomeCliente = partesNome.join(" ");

document.write("<p><strong>Cliente:</strong> Olá, " + nomeCliente + "! Sua compra foi realizada com sucesso.</p>");