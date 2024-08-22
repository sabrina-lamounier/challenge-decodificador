const textArea = document.querySelector(".input__text__area");
const menstextArea = document.querySelector(".output__copiar__text__area");
const output = document.querySelector(".output");
const outputPadrao = document.querySelector(".output__padrao");
// const outputCopiar = document.querySelector(".output__copiar__text__area");
// const outputCopiar2 = document.querySelector(".output__copiar__botao__copiar");
const outputCopiar = document.querySelector(".output__copiar");

let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    menstextArea.value = textEncriptado;
    textArea.value = "";
    if (outputCopiar.className == "output__copiar"){
        outputPadrao.classList.toggle('invisivel');
        outputCopiar.classList.toggle('visivel');
    }
}

function btnDesencriptar() {
    const textDencriptado = desencriptar(textArea.value);
    menstextArea.value = textDencriptado;
    textArea.value = "";
    if (outputCopiar.className == "output__copiar"){
        outputPadrao.classList.toggle('invisivel');
        outputCopiar.classList.toggle('visivel');
    }
}
    
function btnCopiatexto() {
    const stringCopiada = menstextArea.value;
    textArea.value = stringCopiada;
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

