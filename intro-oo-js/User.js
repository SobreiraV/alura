export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
    }

    get nome() {  //get é um método que retorna o valor da propriedade privada (somente leitura)
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {  //set é um método que altera o valor da propriedade privada
        if (novoNome === '') {
            throw new Error('O nome não pode ficar vazio')
        }
        this.#nome = novoNome
    }

/*     #montaObjUser() {  //objeto para ter acesso as própriedades privadas, ele foi declarado dentro de user
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    } */

    exibirInfos() {
        //const objUser = this.#montaObjUser()
        return `Nome: ${this.nome} - Email: ${this.email} - Nascimento: ${this.nascimento} - Role: ${this.role} - Ativo: ${this.ativo}`
    }
}

/* const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser)) */