{
    {
        {
            var sera = 'Sera???'
            console.log(sera)
        }
    }
}
console.log(sera)//No JS as reguas de escobo é mais flexivel para variaveis var

function teste(){
    var local = 123
    console.log(local)
}
//console.log(local) //Apesar de ser flexivel ele ainda tem escobo, as funções respeitam o escobo.
/**TEntar não criar variaveis globais, pois é muito facil de sobrescrevar elas no JS*/



/** Ate onde o escobo funciona no JS usando VAR e LET*/
var numero = 1
let numero2 = 1
{
    var numero = 2
    let numero2 = 5
    console.log('dentro =', numero)
}
console.log('fora =', numero)