import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
        this.role = 'admin'
    }

    nomeAdmin() {
        return `Nome do admin: ${this.nome}`
    }
    
    criarCurso(nomeDoCurso, vagas) {
        return(`Curso de ${nomeDoCurso} criado com ${vagas} vagas`)
    }
}

/* const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.criarCurso('JavaScript', 10))
console.log(novoAdmin.exibirInfos()) */