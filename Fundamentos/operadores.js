/* Aritmeticos */
const [a, b, c, d] = [1, 0, 8, 20]

const soma = a + b + 7 + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)

/* Relacionais */
console.log('01)', '1' == 1)//igual
console.log('02)', '1' === 1)//estritamente igual
console.log('03)', '3' != 3)//diferente
console.log('04)', '3' !== 3)//estritamente diferente

console.log('05)', 3 < 2)//maior
console.log('06)', 3 > 2)//menor
console.log('07)', 3 <= 2)//maior igual
console.log('08)', 3 >= 2)//menor igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

/* Logicos */
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  //a OU INCLUSIVO b
    const comprarTv50 = trabalho1 && trabalho2  //a E b
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // a OU EXCLUSIVO b
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/* Unarios */
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

/* Ternario */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))