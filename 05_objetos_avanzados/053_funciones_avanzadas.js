// FUNCIONES HIGH ORDER (ORDEN SUPERIOR)

/* 
class Animal {
    constructor(nombre, nombreDueno, especie, edad) {
        this.nombre = nombre;
        this.nombreDueno = nombreDueno;
        this.especie = especie;
        this.edad = edad;
    }
}

class Gato extends Animal {
    constructor(tipoPelo){
        this.tipoPelo = tipoPelo;
    }
} 
*/

function traducir(idioma, palabra) {

    return idioma(palabra);
}

function aleman(palabra) {
    let diccionario = {
        'hola': 'hallo',
        'gato': 'katze',
        'animal': 'tier'
    }
    return diccionario[palabra];
}

console.log(aleman('hola'));

function castellano(palabra) {
    let diccionario = {
        'hallo': 'hola',
        'katze': 'gato',
        'tier': 'animal'
    }
    return diccionario[palabra];
}

console.log(traducir(aleman, 'gato'));


// TIMEOUT

var timeoutID;
function timeOutDosSegundos() {
    console.log('empezando el timeout');
    timeoutID = setTimeout(hola, 2000);
}

function sumar(a, b) {
    console.log('hola');
    return (a + b);
}

function hola () {
    console.log('hola');
    return 'hola';
}

timeOutDosSegundos();