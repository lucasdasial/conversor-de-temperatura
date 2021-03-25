const converter  = document.getElementById("btn-converter-c")
converter.addEventListener("click", clicar)

function clicar(){
    let c = Number(document.getElementById("cel").value)
    let f = c * 9 / 5 + 32 
    let printResultado = document.getElementById("resultado")

    printResultado.innerHTML = (`${c}ºC é ${f}ºF`)

}