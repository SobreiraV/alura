let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}