const modulo = require('../../moduloB') 
//const moduloA = require('../../moduloAB') // No caso tomar cuidado com o nome do arquivo, sempre igual ao arquivo original
console.log(modulo.bomDia)

const saudacao = ('saudacao')
console.log(saudacao)

const c = require('./pastaC')
console.log(c.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)