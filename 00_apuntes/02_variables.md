# LOS DATOS EN JS

## CONCEPTOS CLAVE

- Guardamos los datos que necesita nuestro programa en variables, que definimos como **let/const/var nombreVariable = 'dato';**.
- Const y let funcionan solo dentro de su bloque, var es global.
- Los datos primitivos (number, string, boolean, null, undefined) contienen solo un valor, podemos copiarlos directamente a otra variable.
- Los datos objetos (Array, Object, o cualquier instancia de una clase) contienen una referencia que enlaza a su valor real, no podemos copiarlos directamente.

## VARIABLES
Una variable es un espacio de memoria donde se almacena una información significativa (o dato).

## DECLARAR UNA VARIABLE

```javascript
let miVariable = 'miDato';
```

## TIPOS DE DECLARACIONES Y SCOPE (ALCANCE)
Las palabras reservadas con las que indicamos que algo es una variable en javascript son: var, let y const. Todas las declaraciones pueden contener todos los tipos de dato.

### VAR
La variable tiene scope de función y no de bloque, es decir, aparecerá en toda la lógica donde este presente. Para desarrollos complejos es desaconsejable su uso.

```javascript
if(true) {
    var numero = 40;
}
console.log(numero); // si se cumple la condición del if, numero existe en todo el programa.

```

### LET
Tiene scope de bloque, por lo que no afectará a la programación que esté fuera

```javascript
if(true) {
    let numero = 33;
}

//console.log(numero) // lo dejo comentado ya que esta instrucción va a dar error.
```

### CONST
Tambien tiene alcance de bloque, pero su valor no se puede reasignar, aunque si modificar en caso de que sea un objeto (esto se explica mejor en tipos de datos)

```javascript
const numero = 22;
numero = 11;
// console.log(numero); // esto dará error

const arr = [1, 2, 3, 4]
arr.push(5);
console.log(5); // esto funciona, porque no estamos reasignando la variable. 
```

### TIPOS DE DATOS I: DATOS PRIMITIVOS 

Los datos primitivos son valores simples, por lo que se almacena directamente su valor en el espacio de memoria asignado.

#### CARACTERISTICAS DE LOS DATOS PRIMITIVOS

1. INMUTABILIDAD
Los datos primitivos son inmutables, cuando los reasignamos (cambiamos su valor) realmente estamos destruyendo el dato y creandolo otra vez con otra valor.

2. COPIA DE VALOR
Cuando copiamos un dato primitivo, estamos duplicando el valor en otro espacio de memoria, por lo que ambos datos son independientes.

```javascript
let x = 10;
let y = x; // si alteramos y, x no cambiará
```

3. NO USAN MÉTODOS
Accedemos a los valores o atributos directamente.
```javascript
var frase = 'mi string';
console.log(frase.length);
```

#### TIPOS DE DATOS PRIMITIVOS

En función del tipo de dato que se contiene, tenemos:

```javascript
// NUMBER
let edad = 22;
const pi = 3.14159

// STRING -> Cadena de texto
let direccion = 'calle mayor 12, 5F';

// BOOLENO -> true | false
let estaLloviendo = true;

// NULL -> sirve para declarar la ausencia intencional de cualquier valor
let nulo = null;

// UNDEFINED -> es el valor que se asigna a las variables que están definidas, pero no inicializadas.
let indefinido;
```

### TIPOS DE DATOS II: DATOS OBJETO

Un dato objeto se compone de grupos de pares clave-valor, siendo la clave la etiqueta asociada al valor.

#### CARACTERISTICAS DE LOS OBJETOS

1. Su valor es modificable sin destruir al objeto en memoria.

2. No se pueden copiar por referencia, hay que utilizar métodos.
```javascript
var persona1 = { nombre: 'Juan', edad: 35 };
var persona2 = persona1; // hemos copiado la referencia, las dos variables apuntan a Juan.
persona2.edad = 35;
console.log(persona1); // imprime { nombre: 'Juan', edad: 35 }
```
3. Pueden tener metodos asociados

#### TIPOS DE DATOS PRIMITIVOS

## OBJECT
Es el tipo de objeto clave-valor básico de javascript, donde la clave será un parámetro y el valor cualquier tipo de dato.
```javascript
let objeto = { param1: 'valor 1', param2: 'valor 2' };
```

## ARRAY
Es una lista ordenada en la que la clave es un índice que se genera de forma automática.
```javascript
// instanciar un array
const arrRecetas = ['Pizza', 'Ensalada', 'Sushi'];

// obtener un índice
arrRecetas.indexOf('Sushi'); // 2

// verificar si un valor existe
arrRecetas.includes('Gazpacho'); // false

// longitud del array
arrRecetas.length;

// eliminar una entrada (javascript no tiene una funcion predefinida, habría que crear algo similar a esto)
function deleteFromArray(element, arr) {
    let i = arr.indexOf(element);
    if (i !== -1) {
        arr.splice(i, 1);
    }
}

// iterar array
arrRecetas.forEach(receta => {
    console.log(receta);
});

// iterar array usando también el índice
arrRecetas.forEach((receta, index) => {
    console.log(index, receta);
});

// convertir el array en un string (el parámetro es el separador que queremos poner.)
let fraseRecetas = arrRecetas.join(', ');

// convertir un string en un array
let newArrRecetas = fraseRecetas.split(', ');

// vaciar el array
arrRecetas.length = 0;
```

## MAPA

Es una variante de Object, en la que la clave puede ser también cualquier tipo de dato.

```javascript
// instanciar un mapa
const mapaRecetas = new Map();
// añadir entradas
mapaRecetas.set('Pizza', ['masa', 'salsa de tomate', 'queso', 'pepperoni']);
mapaRecetas.set('Ensalada', ['lechuga', 'tomate', 'pepino', 'aderezo']);
mapaRecetas.set('Sushi', ['arroz', 'pescado fresco', 'alga marina', 'wasabi']);

// leer entradas
mapaRecetas.get('Pizza');

// comprobar si una entrada existe
mapaRecetas.has('Cocido');

// borrar una entrada 
mapaRecetas.clear('Sushi');

// iterar un mapa
mapaRecetas.forEach((value, key) => {
    //funciones DOM para que quede bonito.
    console.log(`${key}: ${value.join(', ')}.`);
}); 

// vaciar el mapa
mapaRecetas.clear()
```

## FUNCTION

Una función es un bloque de código que utilizaremos repetidamente en nuestro código

```javascript
// instanciamos la funcion, poniendo en los parentesis los parámetros (datos que necesitaremos para operar)
function sumar(numeros) {
    // creamos variables si las necesitamos para operar
    let suma = 0;
    // realizamos las operaciones
    numeros.forEach(numero => {
        suma += numero;
    })
    // devolvemos un resultado si procede
    return suma;
}

// para utizar la funcion...
let suma = sumar([1, 4, 5, 6, 7, 6]);
```






