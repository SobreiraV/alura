function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        //alert('Elemento não encontrado')
        console.log('Elemento não encontrado ou seletor inválido')
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}


/* O código abaixo é funcional, mas é o primeiro modelo.


function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    //console.log(contador);
}
*/

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
