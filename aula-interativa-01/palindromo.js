//ana
//arara

var palavra = process.argv[2]; //parâmetro do node.js para pegar a palavra digitada pelo usuário 
//orrac
var palavraInvertida = "";

for (var i = palavra.length - 1; i >= 0; i--) { 
    palavraInvertida  += palavra[i];
}

if (palavra == palavraInvertida) {
    console.log(palavra + " é palindromo.");
} else {
     console.log(palavra + " não é palindromo.");
}