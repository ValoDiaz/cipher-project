window.cipher = {
    encode: (resultCompleto, numADesplazar) => {
        let encriptado= "";
        for (let i = 0; i< resultCompleto.length; i++){
            //console.log(resultCompleto.length);
            let asciiPosition = resultCompleto.charCodeAt(i);
            if (asciiPosition >= 32 && asciiPosition<= 126){
                let converNum = (asciiPosition - 32 + parseInt(numADesplazar)) %95 + 32;
                encriptado += String.fromCharCode(converNum);
            }
        }
    return encriptado + numADesplazar;;
},
decode: (cualquierCifrado, nvoNumero) =>{
    let descifrado = "";
    var cualquierCifrado = textEncript.value;
    for (let i = 0; i<cualquierCifrado.length; i++){
        console.log(cualquierCifrado);
        let asciiPositionDos= cualquierCifrado.charCodeAt(i)
        console.log(asciiPositionDos);
            if (asciiPositionDos >= 32 && asciiPositionDos<= 126){
            let converCifrado = (asciiPositionDos - 126 - parseInt(nvoNumero)) %95 + 126;
            console.log(converCifrado);
            descifrado += String.fromCharCode(converCifrado);
            console.log(descifrado)
            }
        }
        return descifrado;
    }
}