window.cipher = {
    encode: (offset, string) => {
        let result;
        for (let i = 0; i<(string.length); i++){
            let asciiPosition = string.charCodeAt(i);
            let enCodexString = (asciiPosition-65 + offset) %26 + 65;
            result = String.fromCharCode(enCodexString);
        }
        return result;
    }
};


/*cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.*/