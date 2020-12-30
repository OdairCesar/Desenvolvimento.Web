/*Como sabemos cada variavel tem um endereço na memoria do computador. 
 *No JS é a mesma coisa, mas em relação a objetos á um pequeno e muito importante detalhe:
 */

const a = {nome: 'Teste'}
console.log(a)
const b = a
console.log(b)
/*
 *Como vemos a variavel B pegou o objeto da variavel A
 */
b.name = "Opa"
console.log(a)
console.log(b)
/*
 * Como percebemos ao mudar o valor de nome no objeto B tambem mudamos o valor do nome no objeto A
 * Isso acontece, pois ao atribuito o obejto A ao B nos passamos o endereço alocado na memoria. 
 * Então o objeto A e B tem o mesmo endereço.
 * Ao mudamos algo no A o B irá perceber e se mudamos algo no B o A irá perceber
 */

var c = 5
var d = c
c = 6
console.log(c)
console.log(d)

/* 
 * Ué aqui no comando acima não aconteceu a mesma coisa?
 * 
 * No JS os tipos primitivos ao atribuir um variavel a outra ele passa somente o valor e não o entereço da memoria
 * 
 * ISSO É MUITO IMPORTANTE NÃO SO NO JAVASCRIPT, MAS EM QUALQUER LINGUAGEM DE TIPAGEM FRACA
 */

let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)// o null não aponta para nenhum endereço, então não tem endereço e nem valor

const produto = {}
console.log(produto.preco)// No caso ele tem endereço, mas o endereço esta vazio
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir underfined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)