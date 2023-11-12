// Es la forma sencilla de copiar objetos y arrays, o de "explotarlos"

let x = 10;
let y = x;
x = 12;
console.log(y);


let paula = antonio;
paula.edad = 33;
console.log(antonio.edad);


let paula = {...antonio};


let numeros = [1,3,4,5,6]

let numeros2 = [...numeros];