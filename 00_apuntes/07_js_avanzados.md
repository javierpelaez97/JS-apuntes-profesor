# JS AVANZADO

## MODO ESTRICTO
Segun nuestro código va cogiendo complejidad, es conveniente utilizar el modo estricto (javascript vanilla), este modo establece una serie de restricciones que pueden evitar errores.

- No se permiten variables sin inicializar.
- No se permite el uso de this en contexto global.
- No se pueden duplicar parámetros en las funciones (* ver en clases).
- etc.

```javascript
'use strict'; // se coloca al principio del documento.
```


## MÉTODO MAP()
El método map crea un nuevo array aplicando una función a cada uno de sus elementos.

```javascript
// queremos obtener un array cuyos valores sean el doble que los del array de ejemplo:
const double = nums.map(num => {
    return num * 2;
});

```
Si es un array de objetos, podemos editarlos utilizando los métodos de objetos

```javascript
// queremos obtener un array solo con los nombres:
const personas = [
    { nombre: 'Juan', edad: 34 },
    { nombre: 'Alba', edad: 28 },
    { nombre: 'Lucas', edad: 21 },
    { nombre: 'Lucía', edad: 32 },
];

const nombres = personas.map(persona => {
    return persona.nombre;
});
const nombresM = personas.map(persona => persona.nombre);
```

También podemos utilizar funciones flecha.

```javascript
const double = nums.map(num => num*2);

const nombres = personas.map(persona => persona.nombre);
```

## MÉTODO FILTER

El método filter nos devolverá todos los valores del array que cumplan un criterio

```javascript
// del ejemplo anterior, devolvemos solo los mayores de 30 años.
const mayores30 = personas.filter(persona => {
    if (persona.edad >= 30) {
        return persona;
    }
});

// aunque esto lo veréis habitualmente con una función flecha.
const mayores30a = personas.filter(persona => persona.edad >= 30);
```

## MÉTODO FIND

Devuelve el primer item que cumple con las condiciones.

```javascript
let alba = personas.find(persona => persona.name === 'Alba');
```

## MÉTODO REDUCE

Nos permite reducir los datos de interes de un array a un solo valor.
```javascript
var pilots = [
    { id: 10, name: "Poe Dameron", years: 14, },
    { id: 2, name: "Temmin 'Snap' Wexley", years: 30, },
    { id: 41, name: "Tallissan Lintra", years: 16, },
    { id: 99, name: "Ello Asty", years: 22, }
];


```

## DESESTRUCTURACIÓN

Este método nos permite guardar los datos que nos interesan de un objeto de forma rápida.

```javascript
// queremos obtener la matricula y el año de fabricación  de un coche.
const coche = {
    marca: 'BMW',
    modelo: '120D',
    matricula: '1111AAA',
    fabricacion: 2019,
    propietario: {
        nombre: 'Ana',
        apellido: 'Fedorova',
        dni: '11111111A'
    }
}

const { matricula, fabricacion } = coche;

// si queremos obtener datos de objetos anidados podemos anidar el método (obtenemos matricula y dni del propietario):
const { matricula, propietario: { dni } } = coche;
```

## TIMEOUT

Nos permite pausar la ejecución durante un tiempo definido en milisegundos.

```javascript
var timeoutID;
function ejemploTimeOut() {
    console.log('comienza el timeout');
	timeoutID = setTimeout(saludar, 2000); 
}
function saludar() {
    console.log("Hola !!");
 }

 ejemploTimeOut();
```

# TRY - CATCH

Los bloques try - catch permiten encapsular errores, es decir, evitar que un error crítico interrumpa la ejecución de nuestro programa.

```javascript
// forzamos un error utilizando una variable que no hemos declarado.
try {
    console.log(varNoDeclarada * 2);
} catch (error) {
    console.error(error.message);
}
```

## CALLBACKS

Una callback es una función que pasamos como argumento a otra función, nos permite asegurarnos de que un bloque (el del callback), no se va a ejecutar  hasta que no haya acabado el bloque principal

```javascript
function horaDeComer(callback) {
    console.log('Comiendo...');
    // simulo que tardo un rato en comer.
    setTimeout(function () {
        console.log('Primer plato');
        console.log('Segundo plato');
        console.log('Postre');
        console.log('Termine de comer');
        // Llamando al callback una vez terminamos.
        callback();
    }, 5000);
}

// Usando la función y pasando un callback como argumento
horaDeComer(function () {
    console.log('Ahora a echar la siesta');
});
```