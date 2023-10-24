//criando/declarando a função tocasom com parametro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()  ;
}
//chamando/invocando a função tocasompom
document.querySelector('.tecla_pom').onclick = tocaSom; 

//criando a referência constante litaDeTeclas
const litaDeTeclas = document.querySelectorAll ('.tecla');
//atribuindo o clique no botão 0 que é o primeiro item da lista de teclas
litaDeTeclas[0].onclick = tocaSom

//criando variavel contador, atribuindo o valor inicial como 0
let contador = 0;
//criando o código de repetição while
//enquanto o contador for menos que o comprimento da lista tocara o som
while(contador < listaDeTeclas.length){
    listadeTeclas [contador].onclick = tocaSom;
    contador = contador + 1;
    console.log(contador);
}