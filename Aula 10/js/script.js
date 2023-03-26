var idButton = document.getElementById("id-button");
var title = document.getElementById("title");
var inputContent = document.getElementById("input-content");
var resultContent = document.getElementById("result-content");

function test(){

    alert("Calculado");
}

idButton.addEventListener("click", function(){
    //Alterando o texto do título
    title.innerHTML = "Resultado";

    //Capturando os valores digitados nos campos de texto (input)
    var idName = document.getElementById("id-name").value;
    var idWeight = Number(document.getElementById("id-weight").value);
    var idHeight = Number(document.getElementById("id-height").value);
        //console.log(typeof(idHeight));
        
    var imc = idWeight / Math.pow (idHeight,2);
        console.log("Seu IMC: " + imc.toFixed(3));

    //O que aparece na tela
    resultContent.innerHTML = idName + " seu IMC é: " + imc.toFixed(3) + ", seu IMC é " + imc.toFixed(0) + "kg";

    //Fazendo desaparecer os inputs e mostrando os resultados

    inputContent.style.display = "none";
    resultContent.style.display = "block";

    if(imc <18.5){
        console.log("abaixo do peso");
        resultContent.innerHTML += "<br><br>Situação: Abaixo do peso";
    }

    else if(imc >18.5 && imc <25){
        console.log("peso normal");
        resultContent.innerHTML += "<br><br>Situação: Peso normal";
    }

    else if(imc >25 && imc <30){
        console.log("acima do peso");
        resultContent.innerHTML += "<br><br>Situação: Acima do peso";
    }

    else if(imc >30 && imc <40){
        console.log("obeso");
        resultContent.innerHTML += "<br><br>Situação: Obesidade";
    }

    else{
        console.log("obesidade morbida");
        resultContent.innerHTML += "<br><br>Situação: Obesidade morbida";
    }

    var weightIdealMin = (18.5 * Math.pow (idHeight,2));
    var weightIdealMax = (25 * Math.pow (idHeight,2));
        console.log("Peso ideal:  \nMin: " +  weightIdealMin.toFixed(2) + "kg\nMax" + weightIdealMax.toFixed(3) + "kg");

        resultContent.innerHTML += "<br><hr><br>Peso ideal para sua altura:</br>" +
                                "<br>Min: " + weightIdealMin.toFixed(0) + "kg<br>" +
                                "<br>Max: " + weightIdealMax.toFixed(0) + "kg<br>"
        
}); 
