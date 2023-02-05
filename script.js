function encriptar() {
    var texto = document.getElementById("mensaje").value.toLocaleLowerCase();
    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    // document.getElementById("muneco").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;

 

}


function desencriptar() {
    var texto = document.getElementById("mensaje").value.toLocaleLowerCase();
    var textoCifrado = texto.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    // document.getElementById("muneco").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;

 

}


function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copiar");
    alert("Copiado al portapapeles");
}