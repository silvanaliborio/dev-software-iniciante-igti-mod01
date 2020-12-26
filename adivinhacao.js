/*
Criar um jogo no qual o jogador tenha que adivinhar um numero. 
o jogo deve gerar um numero aleatorio entre 1 e 100, e depois desafiar
o jogador a descobrir qual o numero em no maximo 10 tentativas.
A cada tentativa, caso o jagador nao tenha acertado o numero, o jogo deve informar se o numero 
informado é maior ou menor que o sorteado.
O jogo termina se o jogador acertar o numero ou acabarem o numero  de tentativas.

1) Gerar um numero aleatorio entre 1 e 100
2) Inicializar o numero de tentativas como 10
3) Pedir o jogador para tentar adivinhar o numero
4) Decrementar o numero de tentativas
5) Verificar se a tentativa esta correta
6) Se estiver correta:
    - Informar que acertou o numero
    - Encerrar o jogo 
7) Se estiver incorreta, e ainda existirem tentativas:
    - Informar que ele nao venceu
    - Encerrar o jogo
8) Se estiver incorreto, e aonda existirem tentativas:
    - Informar se a tentativa é maiorou menor que o numweo sorteado 
    - Pedir outra tentativa para o jogador

*/
var numeroAleatorio = Math.round(Math.random() * 100);
console.log(numeroAleatorio);