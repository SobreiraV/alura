const pessoa = {
    nome: "Luma",
    profissão: "Engenheira"
};

console.log(pessoa.nome);

console.log(pessoa.telefone);   //undefined

pessoa.telefone = "11 2233333-4444";  // adiciona uma nova propriedade

console.log(pessoa.telefone);

pessoa.nome = "Luma de Oliveira";  // altera o valor da propriedade

console.log(pessoa);