/** Funções Anonimas é muito importante e usada no JavaScript basicamente é o segredo do sucesso dela */

const soma = function (x, y) {// Quando a função não tem nome ela será um tipo de anonima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { //Aqui tambem fazemos uma função Anonima
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)//Aqui tambem fazemos uma Anonima com Arrow, na verdade toda função Arrow é Anonima

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()