const textArea = document.querySelector(".input__text__area");
const menstextArea = document.querySelector(".output__copiar__text__area");
const output = document.querySelector(".output");
const outputPadrao = document.querySelector(".output__padrao");
const outputCopiar = document.querySelector(".output__copiar");
const root = document.querySelector(":root");
const btSwitch = document.querySelector(".switch");


let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

function btnEncriptar() {
    if (textArea.value == "") {
        return null;
    } 
    const textEncriptado = encriptar(textArea.value);
    menstextArea.value = textEncriptado;
    textArea.value = "";
    if (outputCopiar.className == "output__copiar"){
        outputPadrao.classList.toggle('invisivel');
        outputCopiar.classList.toggle('visivel');
    }
}

function btnDesencriptar() {
    if (textArea.value == "") {
        return null;
    } 
    const textDencriptado = desencriptar(textArea.value);
    menstextArea.value = textDencriptado;
    textArea.value = "";
    if (outputCopiar.className == "output__copiar"){
        outputPadrao.classList.toggle('invisivel');
        outputCopiar.classList.toggle('visivel');
    }
}
    
function btnCopiatexto() {
    if (menstextArea.value == "") {
        return null;
    } 
    const stringCopiada = menstextArea.value;
    textArea.value = stringCopiada;
    updateClipboard(menstextArea.value);
    menstextArea.value = "";
}

function btnSwitch(){
    root.classList.toggle('azul');
    btSwitch.classList.toggle('invert');
    altImg(".cabecalho__logo");
    altImg(".cabecalho__logo__bg");
    altImg(".output__padrao__imagem");   
}

function altImg (classe) {
    const atr = document.querySelector(classe);
    if (atr.src.includes('azul')) {
        atr.src = atr.src.replace("_azul", "");
    }
    else {  
        atr.src = atr.src.replace('.png', '_azul.png');
    }
}


function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      () => {
      },
      () => {
      },
    );
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
