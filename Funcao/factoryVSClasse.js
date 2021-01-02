// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

//Função Construtora
function Pessoas(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoas('João')
p1.falar()
console.log(p1.nome)


/** 
 * IMPORTANTE
 * Como a Classe precisa usar o THIS, depentendo do lugar onde o comando for executado no Brower pode causar erro
 * Diferentemente do Fcatory, já que ele não utiliza o THIS em sua declaração
 */