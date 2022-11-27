import app from './src/app.js';

//como as vezes não vamos usar servidor local, vamos pegar portas comuns em outros servidores
const port = process.env.PORT || 3000;  //env -> enviroment


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})

//o server só escuta e atende as requisições, o app.js é o que faz o processamento



/* const http = require("http");
const port = 3000; //3000, 4000, 8080 são portas usadas comumente em servidor local


const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})*/