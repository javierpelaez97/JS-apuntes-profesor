// un array vacio se declara:

let arr = new Array();

// metodos: 

arr.push('lunes'); // insertar elemento al final.
arr.join('////'); // convertir todos los elemntos de array a un string con el separador que decidamos. default ','

let arr2 = ['martes'];
let arrConcatenado = arr.concat(arr2); // ne une 2 arrays, hay que guardar el resultado en un array nuevo.

arrConcatenado.sort(); // ordena ascendente.

/* MAPAS: colecciones con clave, valor, donde la clave (y el valor) pueden ser de cualquier tipo */

let pepe = {nombre: 'pepe', sexo: 'varon', edad: 35, aficciones : ['cocinar', 'arte egipcio']}
let maria = {nombre: 'maria',sexo: 'mujer', edad: 36, aficciones : ['kick boxing', 'arte barroco']}
let alba = {nombre: 'alba',sexo: 'mujer', edad: 36, aficciones : ['kick boxing', 'arte barroco']}
let matches = new Array();

let tinderMap = new Map();
tinderMap.set(pepe, matches.push(maria)); // pepe hace me gusta y maria tb.
tinderMap.set(pepe, matches.push(alba));

for (let [k, v] of tinderMap) { // pepe consulta los nombres de sus matches
    console.log(v.nombre);
}

for (let dato in pepe) {
    // funcion de sacar el dato, ponerlo visible, y por DOM enviarlo al front.
    console.log(dato);
}

for (let [k, v] of tinderMap) {
    if (v.aficciones.incluces('barroco')) {
        // enviar a ciberseguridad
    }
}

/* BUCLES */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    // enviamos a una lista todos los productos.
    console.log('for', productos[i]);
}

products.forEach(item => {
    console.log('forEach', item);
});




