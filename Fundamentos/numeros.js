const peso1 = 2.0
const peso2 =  Number('1.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.4
const avaliacao2 = 8.7

const total =  avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(total.toFixed(2))
console.log(media.toFixed(2))
console.log(media.toString())// converte em string
console.log(media.toString(2))// binario

console.log(7/0)// numero infinito
console.log("10"/2)// faz a divição
console.log('3' + 2)// faz uma concatenação
console.log("Show!"*2)
console.log(0.1 + 0.7)
console.log((15.8).toFixed(2))