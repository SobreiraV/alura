const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/10/15",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2021/09/10",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log('Curso criado!')
    }
}

//Para não ficar criando usuários um por vez e poder atribuir metodos a eles dinamicamente, vamos cirar um protótipo

//o primeiro parâmetro é o objeto que vai herdar as propriedades e o segundo é o objeto que vai ceder as propriedades
Object.setPrototypeOf(admin, user) //seta o protótipo do objeto admin para o objeto user
admin.criarCurso()
admin.exibirInfos()
