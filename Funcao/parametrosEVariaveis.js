function soma() {
    let soma = 0
    for (i in arguments) {// O arguments pega dos os elementos da função, então se pasamos qualuer falar ele ira adicionar nessa repetição
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))