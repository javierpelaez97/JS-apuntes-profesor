/* BUCLES */

/* 1. FOR */

var arrayCoches = ['ferrari', 'audi', 'seat', 'dacia', 'ford', 'chevrolet', 'toyota', 'kia'];
var arrayCorregido = new Array();


/* let gato = {nombre: 'honey', edad: 1};
let gato2 = {edad: 1, nombre: 'honey'}; */


// console.log('test',arrayCoches[0][0]);

/* for (let i = 0; i < arrayCoches.length; i++) {
    console.log(arrayCoches[i]);
} */


/* 1B. FOREACH */

arrayCoches.forEach(element => {
    arrayCorregido.push(element.charAt(0).toUpperCase().concat(element.slice(1)))
});

//console.log('corregido:::', arrayCorregido);
// console.log('coches:::', arrayCoches);

/* 2. OTROS BUCLES: while, do while,  */

let day = 21;
/* while (day < 30 && day > 20) {
    console.log('es final de mes');
    day++;
} */

let colaDeGente = 10;
/* do {
    console.log('hola');
    colaDeGente--;
} while(colaDeGente > 0); */

let meses = ['marzo', 'abril', 'mayo'];
/* switch(meses) {
    case 'marzo':
        console.log('llevar chaquetilla');
        break;
    case 'abril':
        console.log('llevar sudadera');
        break;
    case 'mayo':
        console.log('llevar gorra');
        break;
    default:
        console.log('has usado el array que no era');
        break;
} */

/* let mesesObj = {
    marzo: 'llevar chaquetilla',
    abril: 'llevar sudadera',
}
 */

// EJERCICIOS:
// EJERCICIO A: hacer el método .includes con un bucle, testarlo con:

var arrayCoches2 = ['ferrari', 'audi', 'seat', 'dacia', 'bmw', 'chevrolet', 'toyota', 'kia'];

let isBmw;
for (let i = 0; i < arrayCoches2.length; i++) {
    if(arrayCoches2[i] == 'bmw') {
        isBmw = true;
        break;
    } 
    if (i == arrayCoches2.length -1 && !isBmw) {
        isBmw = false;
    }
} 
//console.log('for bmw', isBmw);

// EJERCICIO B: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], añadir un nombre nuevo detras de cada uno existente usando bucles.
let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'];
let names2 = ['facundo', 'arturo', 'agapito', 'remigio', 'anselmo']
let newNames = new Array();
let newNamesForEach = new Array()
for (let i = 0; i < names.length; i++) {
 newNames.push(names[i], names2[i])
}
//console.log('newNames', newNames);

// se puede hacer así, pero es spoiler (lo veremos en funciones):
names.forEach((element, index) => { // esto (una funcion lambda) es igual que poner function(element, index) {} (una función anónima)
    newNamesForEach.push(element, names2[index]);
});
//console.log('newNamesForEach', newNamesForEach);

// EJERCICIO C: averigua si el número 2 existe en la siguiente matriz usando solo bucles:
let matriz = [
    [1,2,4],
    [2,3,4],
    [5,6,7]
]

let isTwo = false;
for (let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        if(matriz[i][j] == 2) {
            isTwo = true;
            break;
        }
    }
}
//console.log('isTwo', isTwo);

let isTwoFE = false;
matriz.forEach(arr => {
    arr.forEach(number => {
        if (number == 2) {
            isTwoFE = true;
            return; // esto también es spoiler, lo veremos en funciones.
        }
    });
});
//console.log('isTwoFE', isTwoFE);

// EJERCICIO D: saca por cada consola el sumatorio de cada array dentro de matriz, usa solo bucles.

// EJERCICIO E: crea un bucle que sume los 100 primeros números primos.
// numero primo es el que solo se puede dividir por si mismo y por 1.

// crear bucle
// crear variables

/* n 
desde n hasta 1, voy a hacer la division, para que sea primo, la division tiene que ser decimal en todos menos en n y 1 */

/* una vez decido que n es primo, lo tengo que sumar a los anteriores primos, hasta hacerlo 100 veces */

 
//console.log(isPrimo);





//console.log(primos);




