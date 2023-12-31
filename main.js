//criando/declarando a função tocasom com parametro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio);
    if(elemento && elemento.localName === 'audio'){
    elemento.play()
    } else{
        console.log("elemento inválido ou não encontrado");
    }
}

//criando a referência constante litaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando o código de repetição while e mudando para for
//enquanto o contador for menos que o comprimento da lista tocara o som
for(let contador = 0 ; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama a classe do som
    const idAudio = `#som_ ${efeito}`; //junção com template string
    tecla.onclick = function(){ //função anônima para tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
      if(evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.add('ativa');
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}