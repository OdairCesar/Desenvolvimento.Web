const nums = [1, 2, 3, 4, 5]

/** 
 * O MAP é um FOR com propósito
 * o MAP cria um novo array apartir de um ja existente com mudanças, passadas por funções ou parametros
*/
let resultado = nums.map(function(e) {// Essa multiplica os elementos atuais por 2
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10 // Função soma 10 ao elemento atual. Mesmo esquema, mas em Arrow
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)// Cria arrays de forma encadeada. A 1º soma +10, a 2º multipla *3 e a 3º coloca transfroma em String com o simbolo da moeda
console.log(resultado)


/**---------------------------------------------------------------------------------------------------- */
//Exercicio transformar um JSON em um array de preços

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
/** FORMULA ODAIR */
// Tranformamos o  JSON em Objeto
const criarProduto = function(json){
    return JSON.parse(json)
}

// Pegar preço de produto
const pegarPreco = function(obj){
    //return obj[i].preco //Tentar fazer assim causa dor de cabeça. Lembre disso
    return obj.preco
}
const teste = carrinho.map(criarProduto).map(pegarPreco)
console.log(teste)

/**FORMULA PROFESSOR */
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resul = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resul)

/**--------------------------------------------------------------------------------------------------------- */
//Implementação do Map
Array.prototype.map2 = function(param){
    let arrayNovo = []
    for(let i=0; i<this.length; i++){
        arrayNovo[i] = param(this[i], i, this)
    }
    return arrayNovo
}