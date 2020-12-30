const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// Diferentes de outras linguagens aqui não aparece ERROR e sim Underfined

valores[4] = 10
console.log(valores)//Mostra todos os valores do array
console.log(valores.length)// Quantidade de itens no array

valores.push({id: 3}, false, null, 'Teste')// Coloca valores no final do array e no JS pode se mistura os tipos de variaveis no array, mas nao é recomentado
console.log(valores)

console.log(valores.pop())//Retira o ultimo valor do array
delete valores[0]// Deleta o valor que esta no indice 0 no array
console.log(valores)

console.log(typeof valores)// No JS os array são identificados como objeto