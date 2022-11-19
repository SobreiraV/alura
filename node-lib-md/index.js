import fs from 'fs'; //nativa do JS, não precisa instalar

/* const textoTeste = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)."; */

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]; // retorna um iteravel com todos resultados
                    //colocamos entre colchetes e utilizamos o spread para transformar em array
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]})); //o objeto tem que estar entre parenteses e os idices entre colchetes para o javascript entender corretamente
    return resultados;
    //const capturas = regex.exec(texto); //traz separado por grupos, mas por padrão trás só o primeiro resultado
    //const capturas = texto.match(regex); //traz a sring completa sem separar os grupos
    /* console.log(capturas);
    console.log(capturas[0][1]) //texto do link
    console.log(capturas[0][2]) //link 
    console.log(resultados)*/
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(erro.code, 'não há arquivo no diretório');
}

/*async/await*/

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        //extraiLinks(texto);
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro)
    }
}


/* promisses com then
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminoDoArquivo, encoding)
        .then((texto) => console.log(texto))
        .catch(trataErro);
} */

/* função síncrona
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(texto);
    })
} */

pegaArquivo('./arquivos/texto.md');

//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)