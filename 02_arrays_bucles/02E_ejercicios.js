
/*
EJERCICIO 1: (NOTION)
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.
*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];


/* 
EJERCICIO 2: (NOTION)
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
*/

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

/* 
EJERCICIO 3: (NOTION)
Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
*/
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

/* 
EJERCICIO 4: (NOTION)
Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
*/
const placesToTravel2 = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];


/* 
EJERCICIO 5: (NOTION)
Usa un bucle **for...** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:
*/
const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];


/* 
EJERCICIO 6: (NOTION)
Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
*/
const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

/* 
EJERCICIO 7: (OPCIONALES)
Completa los datos de la tabla en index.html utilizando los valores del siguiente mapa.
*/
let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35 
toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);
let rowAcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno. 
let rowAcolB = 'algo'; 
let rowAcolC = 'algo'; 
let rowBcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno. 
let rowBcolB = 'algo'; 
let rowBcolC = 'algo';
let rowCcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno. 
let rowCcolB = 'algo'; 
let rowCcolC = 'algo';

/*
EJERCICIO 8: FIBONACCI (OPCIONALES)
La sucesión de fibonacci consiste en una serie de numeros los cuales cada uno es la suma de los dos anteriores, de la siguiente manera:
[0, 1, 1, 2, 3, 5, 8, 13, 21...]
https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

Se pide:

- Crear un codigo que almacene en un array los n primeros números de la sucesion (n se definirá como let n = algo).
- Definir con palabras (o pseudocodigo) como vamos a afrontar la solución del problema (que requsitos tiene nuestro programa y como queremos resolverlos).
- Implementar esa estrategia utilizando código.
- testear usando los valores para n: 8, 15, 16. (imprimir el resultado con console.log);

*/

let n = 15;
let numeros = newArray();

