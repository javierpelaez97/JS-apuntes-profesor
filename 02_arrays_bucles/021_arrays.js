/* 1. RECAPITULACIÓN ARRAYS*/

// 1.1 DEFINICIÓN: Un array es una lista ordenada (con índice) de objetos. 
// Javascript "admite" tipos variados, pero es buena practica que un array este compuesto de objetos del mismo tipo.

// 1.2 DECLARAR UN ARRAY: palabra reservada de variable + nombreArray = [nombresDeLosObjetos o vacío];

let myArray = ['hola', 'hello', 'hallo'];
let myArrayVacio = [];
let myArrayVacioBien = new Array();
let myArrayDeMascotas = [
    {
        nombre: 'michifu',
        especie: 'gato',
    },
    {
        nombre: 'morris',
        especie: 'perro',
    }
]
myArrayDeArrays = [
    myArray,
    myArrayVacio,
    myArrayDeMascotas,
    [1, 3, 4, 5]
];
myArrayTipoMatriz = [
    [11, 5, 6],
    [33, 9, 8],
    [22, 12, 7]
];



console.log(myArrayTipoMatriz[0][1]);

//EJERCICIO PRACTICO: crea un array de tres dimensiones y longitud 2 en cada dimension, usa tipos numericos, saca por consola la suma de las posiciones 0-1-1 y 1-1-0.

let array3Dimensiones = [
    [
        [1],[1],[1]
    ],
    [
        [1],[1],[1]
    ],
    [
        [1],[1],[1]
    ],
]


// 1.3 ACCESO A ELEMENTOS POR ÍNDICE.

console.log(myArray[1]);
console.log(myArray[0]['nombre']); 

// 1.4 MODIFICACIÓN DE LOS ELEMENTOS

myArray[0] = 'adiós';

/* 2. MÉTODOS CON ARRAYS */

// 2.1 POP / SHIFT -> elimina el último / primer elemento del array.
let myArray2 = ['hola', 'hello', 'hallo'];

/* myArray2.pop();

myArray2.shift(); */


// 2.2 PUSH -> añade un elemento al final.

myArray2.push('ciao');

// 2.3 REVERSE -> invierte el orden del array

myArray2.reverse();

console.log('reverse', myArray2);

// 2.4 SORT -> ordena el array (a-z strings, creciente en numericos)

let a = myArrayTipoMatriz[0].sort();
console.log('sort',a);

// 2.5 SPLICE
// splice(n) -> elimina n elementos partiendo de 0 
// splice(n, m) -> elimina n elementos partiendo del índice m
// splice(n, m, args) -> elimina n elementos partiendo del indice m y después inserta los definidos en args

let splic = [1,2,3,4,5,6,7,8];

//let splic1 = splic.splice(3);
//console.log(splic1);

/* let splic2 = splic.splice(2, 2);
console.log(splic2); */
/* 
let splic3 = ; */
console.log('3', splic.splice(0, 2, 'test'));

// EJERCICIO PRÁCTICO: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], inserta dos nombres de tu elección entre julio y ana.

// 2.6 UNSHIT -> inserta n elementos al principio del array

splic.unshift(1,1,1);


// 2.7 CONCAT -> une dos arrays, hay que almacenar el valor en una nueva variable

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [8,5,6];
let array4 = [9,5,6];

let arrayConcat = array2.concat(array1).concat(array3).concat(array4);

console.log('concat', arrayConcat);


// 2.8 JOIN -> convierte los valores del array en un string separado por comas o por el parámetro indicado.

let arrayJoin = arrayConcat.join('//');
console.log('join',arrayJoin);

// 2.9 TOSTRING 

let arrayString = arrayConcat.toString();
console.log('tostr', arrayString);

// 2.10 INDEXOF, LASTINDEXOF
//['hola', 'hello', 'hallo', 'hallo', 'hallo'];
console.log('indexOf', myArray.indexOf('hello'));
myArray = ['hola', 'hello', 'hallo', 'hallo', 'hallo'];
console.log('lastindexOf', myArray.lastIndexOf('hallo'));

// 2.11 INCLUDES

if (myArray.includes('hola')) {
    console.log('incluye hola');
}

// HACER LOS EJERCIOS PROPUESTOS

/* 
1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

*/