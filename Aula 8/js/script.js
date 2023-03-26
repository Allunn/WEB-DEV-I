/*
    Demonstração de Popup's
        alert("Hello world!");  //Popup só com "OK"

        confirm("Está gostando do curso?"); //Popup com "OK" e "Cancelar"

        prompt("Qual o número de segurança do seu cartão?"); //Popup com "OK", "Cancelar" e "Input"

    Demonstração de variáveis
        var x = 10;
        var y = "10";

        console.log(x + x); //=20
        console.log(y + y); //=10 + 10, ou 1010. Todos os dados que estiverem entre aspas é uma string, ele só junta, não soma.

        console.log(typeof(x));
        console.log(typeof(y));
*/

var player = prompt(
    "Bem vinde, Digite o seu nome!"
);

    var game = true;
    var ptsPlayer= 0;
    var ptsCpu = 0;

    while(game){

        var escolha = prompt(
            "Escola uma opção:\n 1 - Pedra \n 2 - Papel \n 3 - Tesoura" //O "n" é usado para quebra de linha.
        );

            if(escolha !=1 && escolha != 2 && escolha != 3){
                alert("Entrada inválida!");
            } 
                else { 
                    console.log("jogador escolheu " + escolha);
            }

        var escolhaCpu = Math.floor((Math.random(3) * 3) + 1);

            console.log("CPU escolheu " + escolhaCpu);

            /* 1- Pedra; 2- Papel; 3- Tesoura
            1 ganha do 3
            2 ganha do 1
            3 ganha do 2
            */

            if(escolha == 1 && escolhaCpu == 3 ||
            escolha == 2 && escolhaCpu == 1 ||
            escolha == 3 && escolhaCpu == 2){
                alert ("VITÓRIA")
                ptsPlayer++; //ptsPlayer = ptsPlayer + 1; Se eu quisesse fazer com +5 pontos, seria ++=5
            }    
              else if(escolha == escolhaCpu){
                alert ("EMPATE!");

            } else {
                alert ("PERDEU!")
                ptsCpu++;
            }

        if(!confirm ("Deseja continuar?")); {
            game = !game;
        }
    }//fIM DO LOOP
    
    alert(
        player + ":" + ptsPlayer + " pts\nCPU: " + ptsCpu + " pts "
        )