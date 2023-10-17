//criando/declarando a função tocasompom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()  ;
}
//chamando/invocando a função tocasompom
document.querySelector('#som_tecla_pom').onclick = tocaSomPom; 

//criando a referência constante litaDeTeclas
const litaDeTeclas = document.querySelectorAll ('.tecla');
//atribuindo o clique no botão 0 que é o primeiro item da lista de teclas
litaDeTeclas[0].onclick = tocaSomPom

//criando variavel contador, atribuindo o valor inicial como 0
let contador = 0;
//criando o código de repetição while
while(){

}