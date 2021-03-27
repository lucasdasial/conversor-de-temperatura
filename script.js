function de(valorDe){
    var mediTemp1 = valorDe;
    console.log( mediTemp1);
    return mediTemp1;
}

function para(valorPara){
    var mediTemp2 = valorPara;
    console.log(mediTemp2);
    return mediTemp2;
}
// o evento das funçoes a cima foram declaradas no index.html (onchage) nas tags selections

let valorInserido = document.querySelector("input#value")
let btnConverter = document.querySelector("input#btn-converter") 
let = printResultado = document.querySelector("h2#resultado")
let temperatura = 0

function calcular(){
    // de celsius para as demais
    if (mediTemp1 == 1 && mediTemp2 == 4){
        temperatura = valorInserido 
    }
    else if(mediTemp1 == 1 && meditemp2 == 5){
        temperatura = valorInserido * 9/5 +32
    }
    else if (mediTemp1 == 1 && mediTemp2 == 6){
        temperatura = valorInserido + 273
    }
    // de fahren para as outras
    else if (medTemp1 == 2 && mediTemp2 == 4){
        temperatura = (valorInserido - 32) * 5/9
    }
    else if (medTemp1 == 2 && mediTemp2 == 5){
        temperatura = valorInserido
    }
    else if (medTemp1 == 2 && mediTemp2 == 6){
        temperatura = (valorInserido - 32) * 5/9 +273
    }
    //de kelin para as demais
    else if (medTemp1 == 3 && mediTemp2 == 4){
        temperatura = valorInserido - 273
    }
    else if (medTemp1 == 3 && mediTemp2 == 5){
        temperatura = (valorInserido - 273) * 9/5 +32
    }
    else if(medTemp1 == 3 && mediTemp2 == 6){
        temperatura = valorInserido
    }else {
        printResultado.innerHTML = ("Prfv preencha os campos a cima")
    }
    return temperatura;
}

btnConverter.addEventListener("click", ()=>{
    calcular()
    printResultado.innerHTML = temperatura
})


   
