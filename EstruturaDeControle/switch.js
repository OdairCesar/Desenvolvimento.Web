const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10 || 9: // Demos como usar operadores no case
            console.log('Quadro de Honra')
            break
        case 8: // Demos como fazer mais de um case associado a uma senteça de codigo
        case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:{// Podemos usar os {} no case apesar de não precisar
            console.log('Reprovado')
            break
        }
        default:// Se não executar nenhum case ele caira no default
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)