
var nameClient=document.getElementById("nameClient");
var mail= document.getElementById("mail");
var numTel=document.getElementById("numTel");
var direction=document.getElementById("direction");
var encript=document.getElementById("encript");
var result=document.getElementById("result");
var numADesplazar=document.getElementById("numADesplazar");
var muestraEncript= document.getElementById("muestraEncript");
var descencriptar = document.getElementById("descencriptar");
var textEncript= document.getElementById("textEncript");
var textDescencript = document.getElementById("textDescencript");   
var nvoNumero = document.getElementById("nvoNumero");


// result.innerText = resultCompleto;

function encriptar(){
    var resultCompleto = "Nombre: " + nameClient.value + " Correo: " + mail.value + " Numero: "  + numTel.value + " Direccion: " + direction.value;
    result.innerText = resultCompleto;
    let resultadoEncriptado = window.cipher.encode(resultCompleto,numADesplazar.value);
    console.log(resultadoEncriptado);
    muestraEncript.innerText =resultadoEncriptado;
    alert(" copia y elimina el ultimo numero del cifrado")
}


    



function decodificar(){
    var cualquierCifrado= textEncript.value
    console.log(cualquierCifrado);
    var resultadoDesifrado =  window.cipher.decode(cualquierCifrado,nvoNumero.value);
    console.log(resultadoDesifrado);
    textDescencript.innerText = resultadoDesifrado ;
}



/*
function encriptar () {
    var resultCompleto = "Nombre: " + nameClient.value + " Correo: " + mail.value + " Numero: "  + numTel.value + " Direccion: " + direction.value;
    result.innerText = resultCompleto;
    console.log(resultCompleto);
    let encriptado= "";
    console.log(encriptado);
            for (let i = 0; i<(resultCompleto.length); i++){
            console.log(resultCompleto.length);
            let asciiPosition = resultCompleto.charCodeAt(i);
            console.log(asciiPosition);
            //let converNum= (asciiPosition - 65 + parseInt(numADesplazar.value)) %26 + 65
            let converNum = (asciiPosition - 32 + parseInt(numADesplazar.value)) %95 + 32;
            console.log(converNum);
            encriptado += String.fromCharCode(converNum);
            console.log(encriptado);
            }
        muestraEncript.innerText = encriptado;
        console.log(muestraEncript);
        return encriptado;
}

function decodificar () {
    let descifrado = "";
    for (let i = 0; i<(muestraEncript.innerText.length); i++){
        console.log(muestraEncript.innerText.length);
    let asciiPositionDos= muestraEncript.innerText.charCodeAt(i);
    console.log(asciiPositionDos);
    let converCifrado = (asciiPositionDos - 32 - numADesplazar.value) %95 +32;
    console.log(converCifrado);
    descifrado += String.fromCharCode(converCifrado);
    console.log(descifrado);
    }
    textDescencript.innerText = descifrado;
    return descifrado; 
}*/