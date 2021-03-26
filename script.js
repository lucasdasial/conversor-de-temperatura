let valor = (document.getElementById("value").value)
let printResultado = document.getElementById("resultado")
let btnClicado = document.getElementById("btn-converter")

btnClicado.addEventListener("click", quandoClicado)

function quandoClicado(){
    printResultado.innerHTML = valor
}