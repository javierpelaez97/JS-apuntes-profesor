/* 1. OPERADORES LÓGICOS (OR, AND, NOT) */

/* or */
let llueve = true;
let fregada = false;

let isSueloMojado = llueve || fregada;

console.log('mojado', isSueloMojado); // true


/* and */
let soyRico = false;
let quieroUnFerrari = true;

let vasATenerUnFerrari = soyRico && quieroUnFerrari;

console.log('tengo', vasATenerUnFerrari);

/* not */

let tengoDinero = false;

if (tengoDinero) {
    console.log('no ir al cajero');
} else {
    console.log('ir al cajero');
}

/* !true -> false
!false -> true */

/* 2. OPERADORES ARITMÉTICOS (+, -, *, /, %, ++, --) */

let x = 15
let y = 4

// aritmetica
let suma = x + y;
let resta = x - y;
let multi = x * y;
let divi = x / y;
let modulo = x%y;

/* pre-incremento ++x -> se incrementa la variable y luego se asigna */

let pre = ++x; // pre = 16, x = 16

/* post-incremento x++ -> se asigna la variable y luego se incrementa */

let post = y++; // pre = 4, y = 5


/* 
EJERCICIOS

1.1 Multiplica 10 por 5 y muestra el resultado mediante console.log.

1.2 Divide 10 por 2 y muestra el resultado en un console.log.

1.3 Muestra mediante un console.log el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en x = 15, 
teniendo dos variables y = 10 y z = 5.

1.5 Usa el correcto operador de asignación que resultará en x = 50,
teniendo dos variables y = 10 y z = 5.

*/

