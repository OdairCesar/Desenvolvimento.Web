console.log(typeof Array, typeof new Array, typeof {})

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Declarando array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']// Declarando array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Adiciona valor no elemento escolhido do array
aprovados.push('Abia') // Adiciona valor no ultimo elemento do array
console.log(aprovados.length) // Mostra o tamanho do array

aprovados[9] = 'Rafael' 
console.log(aprovados.length) // Como vai rebarar no console ele avisa ter 10 elementos no array, pois até chegar no elemento 9, ele preenche o array com elementos undefined
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Organiza o array (junta os elementos, evitando os elementos undefined)
console.log(aprovados)

delete aprovados[1] // deleta o valor do elemento escolhido, nesse caso o elemento 1 ficará undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elementos2') // Biblioteca com potencial de manupilação de arrays
console.log(aprovados)