const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

//const itens = localStorage.getItem("itens") || [] //analiza se possui o item, caso não possua cria um novo

//const itens = [] //array para salvar os itens

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault() //evita que o formulario seja enviado por url

    const nome = evento.target['nome']
    const quantidade = evento.target['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual) //colocar no array declarado na linha 3

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

    /* essa parte fica obsoleta com a refatoração acima
    criaElemento(evento.target['nome'].value, evento.target['quantidade'].value)

    evento.target['nome'].value = "" //limpa o campo de nome após o envio
    evento.target['quantidade'].value = "" //limpa o campo quantidade */
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

    /*const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual) //colocar no array declarado na linha 3

    localStorage.setItem("itens", JSON.stringify(itens))*/

    /*localStorage.setItem("item", itemAtual) //o navegador não pode armazenar objetos, então precisa transformar em uma string acima

    // essa armazena mas é sobrescrito, acima colocamos essas duas strings dentro de um só objeto
    localStorage.setItem("nome", nome) //armazena no local storage
    localStorage.setItem("quantidade", quantidade) */
}
