let numInserido = document.getElementById("entrada");
let resultado = document.getElementById("resultado");
let medPrimaria = document.getElementById("medidaPrimaria");
let medSecundaria = document.getElementById("medidaSecundaria");
let medPriValor, medidaSecValor;

/*numInserido.addEventListener("keyup",()=>{
    resultado.value = numInserido.value
})*/
numInserido.addEventListener("keyup", temperatura);
medPrimaria.addEventListener("change", temperatura);
medSecundaria.addEventListener("change", temperatura);

medPriValor = medPrimaria.value
medidaSecValor = medSecundaria.value


function temperatura(){
    //alert("trocou")

    //de celsius para:
    if(medPriValor == "celsius" && medidaSecValor == "celsius"){
        resultado.value = numInserido.value
    }else if(medPriValor == "celsius" && medidaSecValor == "fahren"){
        resultado.value = numInserido.value * 9/5 + 32
    }else if(medPriValor == "celsius" && medidaSecValor == "kelvin"){
        resultado.value = numInserido.value + 273
    }

    //de fahren pra :
    if(medPriValor == "fahren" && medidaSecValor == "celsius"){
        resultado.value = (numInserido.value - 32) * 5/9
    }else if(medPriValor == "fahren" && medidaSecValor == "fahren"){
        resultado.value = numInserido.value 
    }else if(medPriValor == "fahren" && medidaSecValor == "kelvin"){
        resultado.value = (numInserido.value - 32) * 5/9 + 273
    }

    //de kelvin para:
    if(medPriValor == "kelvin" && medidaSecValor == "celsius"){
        resultado.value = numInserido.value - 273
    }else if(medPriValor == "kelvin" && medidaSecValor == "fahren"){
        resultado.value = (numInserido.value -273) * 9/5 +32
    }else if(medPriValor == "kelvin" && medidaSecValor == "kelvin"){
        resultado.value = numInserido.value 
    }
}