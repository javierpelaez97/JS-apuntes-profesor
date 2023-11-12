// map()
const numeros = [1, 3, 4, 6, 7, 10];

const double = numeros.map(function (numero) {
    return numero * numero;
})

const doubleF = numeros.map(numero => numero * numero);

const personas = [
    { nombre: 'Juan', edad: 34, ciudad: 'Lugo' },
    { nombre: 'Alba', edad: 28, ciudad: 'Lugo' },
    { nombre: 'Lucas', edad: 21, ciudad: 'Lugo' },
    { nombre: 'Lucía', edad: 32, ciudad: 'Lugo' },
];

//const nombres = personas.map(persona => { return { nombre: persona.nombre, edad: persona.edad } });

// filter()

const mayores30 = personas.filter(persona => {
    if (persona.edad > 30 && persona.nombre.includes('n')) {
        return persona;
    }
})
const lucenses = personas.filter(persona => {
    if (persona.ciudad === 'Lugo') {
        return persona;
    }
})

const luc = personas.filter(persona => persona.ciudad === 'Lugo' && persona.edad > 30);
console.log(luc);

// find()

const alba = personas.find(persona => persona.nombre == "Alba");

//console.log(lucens);


// reduce()

const edadTotal = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);


//console.log(edadTotal);