const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice/*, array*/) { // Usando função CallBack dentro do ForEach. Importante se tiver um 3º parametro no CallBack ele será o array
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
})

aprovados.forEach(nome => console.log(nome)) // Mesmo do de cima, mas com função Arrow

const exibirAprovados = aprovado => console.log(aprovado) // Mesmo do primeiro, mas agora armazenada em uma constante
aprovados.forEach(exibirAprovados)


/** COMO IMPLEMENTAR NOSSO PROPRIO FOREACH NO ARRAY */
Array.prototype.forEach2 = function(callback) {// Criamos uma função prototipo no objeto ARRAY do JS com o nome de forEach2, ja que o forEach ja existe, essa função tera um parametro e ele define quais informações a função retornará
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)// O THIS é o array onde ele será executado
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})