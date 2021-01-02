console.log(soma(3, 4))// Como o JS lé primeira as funções, podemos usar a function declaration logo na primeira linha, diferente das outras duas formas

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))