/* FUNCIONES */

/* 1. DEFINICION */
function nombre(parametros) {
    // operaciones parametros crudos ==> datos que nos interesan.
    return datos_que_nos_interesan;
}


function sumar(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

let x = 5;
let y = 4;

let suma = sumar(x, y);
//console.log(`El valor de la suma ${suma}`);

/* PARÁMETROS OPCIONALES */

function sumarOpc(num1 = 0, num2 = 0) {
    return num1 + num2;
}

function escribirNombre(nombre, lastName, middleName = 'no tiene', secondLastName = 'no tiene') {

    /*     if (middleName != 'no tiene') {
            return `su nombre es: ${nombre} ${lastName} ${secondLastName}`
        }  */

    if (arguments.length < 2) {
        return 'no valido';
    }

    return `su nombre es: ${nombre} ${middleName} ${lastName} ${secondLastName}`;
}

/* console.log(escribirNombre('Juan', 'Perez', 'Antonio', 'Gracia', 'patatas'));
console.log(escribirNombre('Juan')); */

/* PARÁMETROS ILIMITADOS "arguments" */



/* function sumarTodos() {
    let suma = 0;
    arguments.forEach(numero => {
        suma += numero
    });
    return suma;
}

console.log(sumarTodos(1,2,3,4,4,4,4,4,4,4,456,7,78,3,3,5,6));
console.log(sumarTodos(1,2,3,4,4)); */

/* FUNCIONES ANONIMAS */

const sumaAnonima = (num1, num2) => {
    return num1 + num2;
}



















// EJERCICIOS DE EJEMPLO:

// 1. ¿Quién es más joven?

const personas = [
    { name: 'Maria', age: 25 },
    { name: 'Alba', age: 21 },
    { name: 'Eva', age: 32 },
    { name: 'Joaquin', age: 12 },
];

function masJoven(personas) {

    let dummy = Object.assign({}, personas[0]); //     dummy = personas[0]

    personas.forEach(persona => {
        if (persona.age < dummy.age) {
            dummy = Object.assign({}, persona) // dummy = persona
        }
    });

    return `La pesona más joven es: ${dummy.name}`;
}

//console.log(masJoven(personas));

// 2. ¿Quién pasa de curso? (tiene al menos dos trimestres)
const alumnos = [
    { name: 'Pepe', T1: false, T2: false, T3: true },
    { name: 'Lucia', T1: true, T2: false, T3: true },
    { name: 'Abel', T1: false, T2: true, T3: true },
    { name: 'Alfredo', T1: false, T2: false, T3: false },
    { name: 'Raquel', T1: true, T2: true, T3: true }
];

const alumnos3 = [
    { name: 'Pepe', T1: false, T2: false, T3: false },
    { name: 'Lucia', T1: false, T2: false, T3: false },
    { name: 'Abel', T1: false, T2: false, T3: false },
    { name: 'Alfredo', T1: false, T2: false, T3: false },
    { name: 'Raquel', T1: false, T2: false, T3: false }
];

const aprobados = (alumnos) => {
    // visión general del problema -> ¿Quien pasa de curso? Pasar de curso = 2+ trimestres aprobados
    // ¿Que datos nos van a dar? 1 array de **Objetos alumno {nombre:string, 3 x trimestre: bool}
    // ¿Que datos auxiliares voy a necesitar?
    let arrayDeAprobados = new Array();


    // como vamos a transformar, filtrar, adornar... esos datos. 
    // verificar si cada **alumno esta aprobado o no
    // sí: añadir a la **array de aprobados
    // no: no añadir a la **array de aprobados

    for (let alumno of alumnos) {
        if (alumno.T1 && alumno.T2 || alumno.T1 && alumno.T3 || alumno.T2 && alumno.T3) {
            arrayDeAprobados.push(alumno);
        }
    }

    // qué tenemos que devolver y cómo: un **array de aprobados
    return arrayDeAprobados > 0 ? arrayDeAprobados : 'no hay aprobados';
}
console.log(aprobados(alumnos3));

// tenemos que saber si a cada coche le toca o no ITV
// ITV 1º 4 años, después cada 2, cuando + 10 años cada año.
// lista con los nombres de los coches que pasan la itv este año.

const coches = [
    { nombre: 'BMW', edad: 3, historico: false },
    { nombre: 'Cadillac', edad: 9, historico: false },
    { nombre: 'Rolls Royce', edad: 45, historico: true },
    { nombre: 'Mercedes', edad: 1, historico: false },
    { nombre: 'Hispano-Suiza', edad: 80, historico: true },
    { nombre: 'Mustang', edad: 37, historico: true },
    { nombre: 'Ferrari', edad: 7, historico: false },
    { nombre: 'Porsche', edad: 2, historico: false },
    { nombre: 'Aston Martin', edad: 20, historico: false },
];


function tocaItv (coches) {
    // ¿Qué datos nos dan? Array **COCHES[any] {string: nombre, number: edad, bool: historico (si es histórico)}
    // ¿Que datos auxiliares?  Array[string] **COCHES-QUE-VAN [nombre del coche]
    let cochesQueVan = new Array();
    // TRANSFORMAR LOS DATOS
    coches.forEach(coche => {
        //edad = 4 || 6 || 8 || 10
        if(coche.edad == 4 || coche.edad == 6 || coche.edad == 8 || coche.edad >= 10 ) {
            cochesQueVan.push(coche.nombre);
        }
    });

    // ¿Que tenemos que devolver Array[string] COCHES-QUE-VAN [nombre del coche]
    return cochesQueVan;
}

console.log('coches que van', tocaItv(coches));



// 3. Crea un objeto que tenga solo los nombres de los alumnos usando la lista del ejercicio anterior.

// 4. Dado el array siguiente, devuelve uno que contenga los cuadrados matematicos de sus componentes usando una funcion flecha

const numeros = [2, 4, 6, 8, 10];
const cuadrados = []; // cambia esto





