const escola = "Udemy"

console.log(escola.charAt(4))// quinta letra (quinto indice)
console.log(escola.charCodeAt(3))// mostra qual é numero da letra na tabela ask
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!"))
console.log('Escola ' + escola + '!')
console.log(escola.replace(4, 'i'))

console.log('Ana,Maria,Pedro'.split(','))



/* Template de Strings */
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá  
    ${nome}!`
console.log(concatenacao, template)

// expressões
console.log(` 1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
