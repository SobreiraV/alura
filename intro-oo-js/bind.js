const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/10/15",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()
// const exibir = user.exibirInfos
//exibir()

/* const exibir = function() {
    console.log(this.nome, this.email) //this não faz sentido aqui, por que está fora do objeto
} */

/* const exibir = function () {
    console.log(this) // tras o objeto global quando não está vínculado ao objeto (objeto interno do node)
} */

const exibir = function () {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user) //bind cria uma nova função com o this associado ao objeto passado

exibirNome() //retorna o nome por causa do bind
exibir() //não retornar nada, pois não está associado a nenhum objeto