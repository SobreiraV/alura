import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

db.on("error", console.log.bind(console, "Erro de conexão")); //para avisar no caso de erro
db.once("open", () => {
    console.log("Conexão feita com sucesso.");
})

const app = express();

app.use(express.json()); //sem isso o que está chegando via post não é lido

/* const livros = [
    {id: 1, "Titulo": "Senhor dos Aneis"},
    {id: 2, "Titulo": "O Hobbit"},
] */

app.get('/', (req, res) => {        //devolvendo uma mensagem para a rota '/' (rota vazia)
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    })
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; //com o index identificado ele altera o titulo
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1); //posição de inicil e quantos elementos serão excluidos
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;