//Loop com o VAR
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log(i)

//Loop com o LET
for (let c = 0; c < 10; c++){
    console.log(c)
}
//console.log(c)// Como o LET trabala melhor o escobo isto acontece error


//Escobo em loop usando VAR
var funcs = []
for (var cc = 0; cc < 10; cc++){
    funcs.push(function(){
        console.log(cc)
    })
}
funcs[2]()
funcs[8]()

//Escobo em loop usando LET
for (let ii = 0; ii < 10; ii++){
    funcs.push(function(){
        console.log(ii)
    })
}
funcs[11]()
funcs[13]()