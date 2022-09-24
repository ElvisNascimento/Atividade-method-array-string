// let nomesDigitados = [];

// prompt("digite alguns nomes");


// for(i=0;i < nomesDigitados.length;i++)
// {

// }
// console.log(nomesDigitados);

// let nomeSelecionado = prompt("Escolha um desses:" + nomesDigitados);

// let index = nomesDigitados.indexOf(nomeSelecionado);

// if(index >= 0)
// {
//     document.write(index);
// }

// document.write(nomeSelecionado);

// let frase = prompt("Digite sua frase");
// document.write("Frase:" + frase);
// document.write("<br>");
// let palavraSelecionada = prompt("Escolha uma palavra da frase");
// if(frase.indexOf(palavraSelecionada) >= 0){
//     document.write("A palavra escolhida está na posição:" + frase.indexOf(palavraSelecionada));
//     document.write("<br>");
//     frase = frase.replace(palavraSelecionada, "<b>"+palavraSelecionada+"</b>")
//     document.write("Frase:" + frase);
// }else{
//     document.write("A palavra não está na frase");
// }

let nomesDigitados = [];

for(let i = 0; i < 5; i++){
    // Recebe o nome do prompt
    let nome = prompt("digite 5 nomes")

    // Adiciona no array
    nomesDigitados.push(nome);

    // Imprime o nome na tela
    document.write(nome);

    // Quebra a linha
    document.write("<br>");
}


let nomeSelecionado = prompt("Escolha um desses:" + nomesDigitados);

nomesDigitados.forEach(function(cadaNome, index){
    if(cadaNome === nomeSelecionado){
        return document.write("O nome foi encontrado na posição: "+ index) 
    }
});