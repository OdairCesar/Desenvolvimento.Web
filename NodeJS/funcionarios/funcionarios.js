/** Exercicio para pratica */

/**
 * Pegue a lista de funcionarios da pagina da Cod3r e transforme em objeto com o Axios
 * Depois pesquise funcionarios com o pais China com generio Feminino e comparar o salarios para mostra a mulher com o menor salario
 */
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulherChinesaMenorSalario = axios.get(url).then(response => {
    const funcionarios = response.data

    const china = function(f) {
        return f.pais === 'China'
    }

    const feminino = function(f){
        return f.genero === 'F'
    }

    const menorSalario = function(f, fAtual){
        if (f.salario > fAtual.salario){
            f = fAtual
        }
        return f
    }
    console.log(funcionarios.filter(china).filter(feminino).reduce(menorSalario))
})


/**------------------------------------------------------------------------------------------------------ */
/** Resposta do Professor */
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})