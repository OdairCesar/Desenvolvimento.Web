/* Função literal*/
function fun1() { }

// Armazenar em uma varievel
const fun2 = function () { }

// Armazenar em um array
const arrai = [function (a, b) { return a + b}, fun1, fun2]
console.log(arrai[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}
run(function (){ console.log('Executando... ')})

//Uma função pode retunar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)