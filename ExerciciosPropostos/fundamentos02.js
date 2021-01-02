function Triangulo (A, B, C) {
    if(A == B && B == C){
        return 'Equilátero'
    } else if (A == B || B == C || A == C) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(Triangulo(2, 2, 2));
console.log(Triangulo(2, 3, 3));
console.log(Triangulo(2, 3, 4));

