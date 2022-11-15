const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;

/* console.log(` o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`); */
