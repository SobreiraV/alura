const listaLivros = require('./array');

function mergeSort(array) {
    if (array.length > 1) {
        const meio = Math.floor(aray.length / 2); //math.floor arredonda para baixo
        const parte1 = mergeSort(array.slice(0, meio)); //comeca no indice 0 e vai ate o meio
        const parte2 = mergeSort(array.slice(meio, array.length)); //comeca no indice do meio e vai até o final
        array = ordena(parte1, parte2);
    }  //mergeSort faz a array ser chamada continuamente
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(listaLivros));