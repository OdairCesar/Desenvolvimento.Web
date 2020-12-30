const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //Quando o const esta sem o nome da constante, isso significa a desconstroção da constante. Tirando o pares nome e idade do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Como eles não existem no objeto ele voltará underfined.
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa// Extraindo itens de um objeto dentro de outro objeto.
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa// error, oois o objeto não existe e ainda tentamos pegar elementos dele.
console.log(ag, num)

//atribuindo valores de forma otimizada
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//Destructuring em funções
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())