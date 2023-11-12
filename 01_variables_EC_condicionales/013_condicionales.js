/* 1. IF */

let llueve = false;

/* 
let cerrarVentana = false;
if (llueve) {
    cerrarVentana = true; 
} 

*/

/* 2. IF - ELSE */

let cerrarVentana;
if (llueve) {
    cerrarVentana = true;
} else {
    cerrarVentana = false;
}

/* 3. IF-ELSE */

let soldados = 100;
let orcos = 200;

if (soldados > orcos) {
    console.log('atacar');
} else if (soldados == orcos) {
    console.log('defender');
} else if (soldados < orcos) {
    console.log('pedir refuerzos');
} else {
    console.log('salir corriendo');
}

/* . TERNARIO */

let ternario = soldados > 200 ? 'tengo mas de 200' : 'tengo menos de 200 o 200';
console.log('ternario', ternario);


/* EJERCICIOS */

/* 
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

*/

/* if ((number2 / number1) == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (((number3 * 5) == number1) && ((number1 * 2) == number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (((number2 / 2) == number1) || ((number1 / 5) == number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
} */

