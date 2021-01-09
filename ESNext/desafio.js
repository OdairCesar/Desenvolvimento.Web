/**
 * Usando a biblioteca FS e Path do Node leia um arquivo .txt e imprima o conteudo no console. USANDO PROMISE
 */

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve => { //O Promise é sincrono, ou seja a linha a proxima linha só é execudada depois da anterior ser finalizada.
        fs.readFile(caminho, function(__, conteudo){
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho).then(resolve =>console.log(resolve))

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
