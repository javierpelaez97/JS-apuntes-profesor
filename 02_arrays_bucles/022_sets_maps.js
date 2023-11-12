/* 1. SETS */

let conjunto = new Set();

conjunto.add('elemento');

conjunto.has('elemento');

conjunto.forEach(item => {

});


/* MAPS */

let mapa = new Map();

mapa.set('key1', 'value1');
mapa.get('key1');

let michifu = {
    raza: 'gato',
    edad: 5
}
let morris = {
    raza: 'perro',
    edad: 6
}

let mascotasMap = new Map();
mascotasMap.set(michifu, 'no dar lentejas');
mascotasMap.set(morris, 'sacar a las 9');

/* 3A. FOR OF */

for ( let [k, v] of mascotasMap ) {
    console.log('key', k);
    console.log('value', v);
}

let numeros = [2,3,4,5,55,23,90,123];

for (let numero of numeros) {
    console.log('arr value', numero);
}

/* 3B. FOR IN */

let coche = {
    marca : 'bmw',
    modelo : 'serie 1',
    color : 'azul',
    matricula : '1234DDD',
    etiqueta : 'ECO'
}

for ( let param in coche ) {
    console.log(param, coche[param]);
}


/* for (let [k, v] of mascotasMap) {
    console.log(k, '=', v);
} */


/* EJERCICIOS */

/* Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
 */

let popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35} //
]



for (let toy of toys) {
    if (toy.sellCount > 14) {
        popularToys.push(toy);
    } 
}

console.log(popularToys);


let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35 

// insertar los toy en el mapa
toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);

// iterar el mapa y guardar los que tengan mas de 14
for (let [k, v] of toysMap) {
    if (v > 14) {
        newToysArray.push(k);
    }
}
// imprimir el array nuevo
console.log(newToysArray);


// EJERCICIO
// rellenar la tabla de index.html con los datos de nuestro Map.
// columna A: id
// columna B: name
// columna C: sellCount
// OPCIONAL: dar estilos y formato a la tabla.


let rowAcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno. 
let rowAcolB = 'algo'; // extraer de mi mapa el parametro A del juguete uno.
let rowAcolC = 'algo'; // extraer de mi mapa el parametro A del juguete uno.



let ddexMap = new Map();
let marea = {nombreArtista: 'Marea', genero: 'rock urbano', disco: 'besos de perro', discografica: 'independiente'};
let extremoduro = {nombreArtista: 'Extremoduro', genero: 'rock urbano', disco: 'la ley innata', discografica: 'warner'};
let rosalia = {nombreArtista: 'Rosalia', genero: 'flamenco - hip-hop', disco: 'motomami', discografica: 'sony'};

ddexMap.set(marea, 'enviado_distribuidora');
ddexMap.set(extremoduro, 'conflicto_derechos');
ddexMap.set(rosalia, 'faltan_datos');

function notificarAVentas(nombreArtista, discografica) {
    // logica que hara que a la persona que figura en BBDD como de ventas le llega un correo con la informacion.
}


for (let [k, v] of ddexMap) {
    if (v == 'faltan_datos') {
        notificarAVentas(k.nombreArtista, k.discografica);
    }
}







