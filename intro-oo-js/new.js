/* function User(nome, email) { //clase inicia com letra maiúscula
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `Nome: ${this.nome} - Email: ${this.email}`
    }
} */

//User é o protótipo do objeto novoUser

// const novoUser = new User('Juliana', 'j@j.com')
// console.log(novoUser.exibirInfos())

/* function Admin(role) {
    User.call(this, 'Juliana', 'j@j.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role) */

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function () {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())
// console.log(use.isPrototypeOf(novoUser)) //retorna true se o objeto for protótipo do outro