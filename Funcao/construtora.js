/**
 * Essa seria forma de se criar sistemas no JavaScript usando o paradigma OO
 * Usando uma função construtora
 * É diferente ja que em outras linguagens é uma classe e dentro dela a uma função construtora.
 */

function Carro(velocidadeMaxima = 200, delta = 5) {// Metodo contrutor, que também funciona como classe em outras linguagens
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
