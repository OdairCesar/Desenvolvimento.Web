function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('E verdade.. ' + valor)
    }
}

/** Quais valores é considerado true no JS */
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

/** Intentação no JS */
function teste1(num){
    if(num > 7 )
        console.log(num)//irá ser executado dentro do IF
        console.log('Final')// irá ser executado dentro da function. Por conta de não haver {} no IF
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {// Cuidado com o ; na hora de digitar os comandos de controle
        console.log(num,)
    }
}

teste2(6)
teste2(8)
