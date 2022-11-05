const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target['nome'].value, evento.target['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}
