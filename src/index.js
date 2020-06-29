
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



function encriptar () {
    var resultCompleto = "Nombre: " + nameClient.value + " Correo: " + mail.value + " Numero: "  + numTel.value + " Dirección: " + direction.value;
    result.innerText = resultCompleto;
    console.log(resultCompleto);
    let encriptado= "";
    console.log(encriptado);
            for (let i = 0; i<(resultCompleto.length); i++){
            console.log(resultCompleto.length);
            let asciiPosition = resultCompleto.charCodeAt(i);
            console.log(asciiPosition);
            let converNum = (asciiPosition - 32 + numADesplazar.value) %95 + 32;
            console.log(converNum);
            encriptado += String.fromCharCode(converNum);
            console.log(encriptado);
            }
        muestraEncript.innerText = encriptado;
        console.log(muestraEncript);
        return encriptado;
};
/*
function descencriptar () {
let descifrado = "";
    for (let i = 0; i<(encriptado.length); i++){
    let asciiPositionDos= encriptado.charCodeAt(i);
    console.log(asciiPositionDos);
    let converCifrado = (asciiPositionDos - 32 - numADesplazar.value) %95 + 32;
    descifrado += String.fromCharCode(converCifrado);
}
    textDescencript.innerText = descifrado;
    return descifrado;
};*/