// Função normal
let dobro = function (a) {
    return 2 * a
}

// Usando o arrow
dobro = (a) => {
    return 2 * a 
}

// Usando arrow de forma implícita
dobro = a => 2 * a 
console.log(dobro(Math.PI))

// Função normal
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Função sem paramentro
ola = _ => 'Olá' // possui um parametro
console.log(ola())


/* Parecido com o exemplo do blindThis mais aqui usamos o Arrow. As funções usando Arrow não muda aonde o THIS esta */
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/*Essa função ache de forma diferente no Node.js e Navegador. Isso mostra as diferenças de THIS no JS usando BLIND e ARROW */
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


