/**
 * A ideia do call back é passar uma função para outra função e quando um determinado evento acontecer, essa função passada será disparada e chamada de volta.
 * Essa fnção call back pode ser chamada varias vezes.
 * Usado muito em requisições de Ajax
 */
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))


/** 
 * DIFERENÇAS USANDO E NÃO USANDO CALL BACK 
 */
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 // Essa função vai fazer uma validação em cada item do array notas, caso a nota seja menor que 7 ele retorna TRUE, permitindo que notasBaixas2 recaba esse item
})
console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7 // Fazendo o mesmo comando de cima, mas usando o ARROW IMPLICITO
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

// OU
document.getElementsByTagName('body')[0].onclick = e => console.log('O evento ocorreu')