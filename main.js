function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()  ;
}
document.querySelector('#som_tecla_pom').onclick = tocaSomPom; 

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()  ;
}
document.querySelector('#som_tecla_clap).onclick = tocaSomClap; 

const litaDeTeclas = document.querySelectorAll ('.tecla');
litaDeTeclas[0].onclick = tocaSomPom