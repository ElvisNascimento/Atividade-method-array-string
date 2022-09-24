let nomesDigitados =[ prompt("digite alguns nomes")];

// nomesDigitados.forEach(function(cadaNome){
//     document.write(nomesDigitados);
// });


let nomeSelecionado = [prompt("Escolha um desses:" + nomesDigitados)];


const index = nomesDigitados.findIndex(function(nome){
    return nome == nomeSelecionado;
})
document.write(index);

// document.write(nomeSelecionado);