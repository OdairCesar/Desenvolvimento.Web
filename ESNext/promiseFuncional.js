let a  = 1
console.log(a)

let p = new Promise(function(cumprirPromesa){
    cumprirPromesa({
        x: 'Paulo',
        y: 1,
        z: true
    })
})

p.then(function(valor){
    console.log(valor)
})
p.then(valor => console.log(valor))

p.then(valor => valor.x).then(primeiro => primeiro[0]).then(letra => letra.toLowerCase()).then(letraMinuscula => console.log(letraMinuscula))


/**------------------------------------------------------------------------------------- */
let e = new Promise(function(Resolve){
    Resolve([
        'Paulo',
        'João',
        'Maria'
    ])
})

function primeiroElemento(valor){
    return valor[0]
}

function primeiroLetra(string){
    return string[0]
}
function LetraMinusc(letra){
    return letra.toLowerCase()
}

e
    .then(primeiroElemento)
    .then(primeiroLetra)
    .then(LetraMinusc)
    .then(console.log)