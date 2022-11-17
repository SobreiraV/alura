const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0; //posição atual do array final

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        /* console.log(`comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`); */

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else if (produtoAtualLista1.preco > produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        atual++; //incrementa a posição atual do array depois de executar o if
    }

    //para continuar pegando os elementos da lista1 mesmo que acabe os da lista2
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    //para continuar pegando os elementos da lista2 mesmo que acabe os da lista1
    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));