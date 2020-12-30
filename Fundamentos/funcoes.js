console.log(typeof Object)

class Produto{}
console.log(typeof Produto)

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(9, 8)
imprimirSoma(4)//Undefined
imprimirSoma(8,5,68,5,22,1)// Soma os dois primeiro e os outro são undefined

//Função com retorno
function soma(a, b =0){
    return a + b
}

console.log(soma(2,3))

//Armazenar funções em variaveis
const imprSoma = function(a,b){
    console.log(a + b)
}
imprSoma(1,2)

//Armazenar função arrow em uma variavel
const arrowSoma = (a, b) =>{
    return a + b
}
console.log(arrowSoma(4,5))

//retorno implicito (funções que executam uma unica linha de codigo)
const subtracao = (a,b) => a - b
console.log(subtracao(3,1))