//Mapeando elementos visuais (html)
var timer = document.querySelector(".timer")
var clock;
var sec = 59;
var min = 4;

var date = new Date();
var secNow = date.getSeconds();
var minNow = date.getSeconds();


//Invoca a função startTimer logo que o js carrega
window.onload = startTimer();

//Função que cria um intervalo de tempo de execução e executa as instruções internas neste intervalo
function startTimer() {
    clock = setInterval(() => {
        timer.innerHTML = minNow + ":" +secNow; secNow--;

        if(secNow == 0) {
            minNow--;
            secNow = 59;
        }

    }, 1000); //Em milissegundos

timer.addEventListener("mouseover", function(){
    clearInterval(clock);
 });

timer.addEventListener("mouseleave", function(){
    startTimer();
});
}
//Trabalhando com a classe "Date()"
var dateNow= new Date();

console.log(dateNow);

console.log(dateNow.getDate());
console.log(dateNow.getDay());
console.log(dateNow.getFullYear());

console.log(dateNow.getHours());
console.log(dateNow.getMinute());
console.log(dateNow.getSecond());

//Trabalhando com setTimeout: realiza um delay (atraso)