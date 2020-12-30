const prod1 = {}// com os {} nos criamos um objeto no JS
prod1.nome = 'Celular Ultra Negra'//Nesse caso o objeto é um conjunto de pares (Chave : Valor), lembre dos conjuntos de pares aprendido em python semestre passado
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40// Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            teste: true
        }
    }
}
// Lembrando JSON é diferente de Objeto. Uma coisa é notação literal de objetos, outra coisa é um JSON que é um formato textual para interoperabilidade entre sistemas diferentes( comunicção entre sistemas)

