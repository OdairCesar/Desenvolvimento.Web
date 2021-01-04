const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Deleta o ultimo valor + elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no ultimo element
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemnto no começo
console.log(pilotos)

/* splice pode adicionar e remover elementos */

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array apartir do array que chamou o splice, com elementos desse array, contando depois do numero do elemento passado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)