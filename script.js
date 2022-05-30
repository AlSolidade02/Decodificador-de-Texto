const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEcriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"



}

function encriptar(stringEncriptada){

    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

    function btnDescriptografa (){

        const textoDescriptado = descriptografada(inputTexto.value)
        mensagem.value = textoDescriptado

    }

    function descriptografada (stringDescriptografada){

        let matrizDescriptografada = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]]
        stringDescriptografada = stringDescriptografada.toLowerCase();

        for(let i = 0; i < matrizDescriptografada.length; i++){
            if(stringDescriptografada.includes(matrizDescriptografada[i][0])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizDescriptografada[i][0],matrizDescriptografada[i][1])
            }
        }
        return stringDescriptografada
    
    }

    function btnCopiar() {
        const textoCopiado = document.querySelector(".mensagem")
        textoCopiado.select();
        document.execCommand('copy');
        alert('Texto copiado para área de transferência!');
        copiar.style.display = 'none';
        mensagem.value = " ";

    }

    


