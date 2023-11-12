/* 

Suponiendo que nuestros soldados son:

a infanteria (potencia 1)
b caballería (potencia 5)
c catapultas (potencia 20)

y que el enemigo tiene un numero indeterminado de orcos:

x orcos (potencia 1)
y trolls (potencia 10)
z nazguls (potencia 50)

1. define un bloque if - elseif para cumplir estas condiciones:

- si mi potencia es mayor, atacar.
- si hay empate, defender
- si es menor, pedir refuerzos
- cualquier otra situación, huir

2. cada ejercito vendrá representado mediante un objeto:

let gondor = {
    infanteria : 1000,
    caballería : 200,
    catapultas : 5
}

3. haz un test del código con los siguentes datos:
    - gondor: infanteria = 1000, caballería = 200, catapultas = 5; - saruman: orcos = 1500, trolls = 20, nazguls = 5;
*/

let gondor = {
    infanteria : 1000,
    caballeria : 200,
    catapultas : 5
}

let saruman = {
    orcos : 1500,
    trolls : 20,
    nazguls : 5 
}

let puntosGondor = (gondor.infanteria * 1) + (gondor.caballeria * 5) + (gondor.catapultas * 20);
let puntosSaruman = (saruman.orcos * 1) + (saruman.trolls * 10) + (saruman.nazguls * 50);

console.log('puntosGondor', puntosGondor, 'puntosSaruman', puntosSaruman);

console.log('corremos?', puntosSaruman > puntosGondor);


if ( puntosGondor > puntosSaruman ) {
    console.log('bloque if else', 'atacar');
} else if (puntosGondor == puntosSaruman) {
    console.log('bloque if else', 'mantener línea');
} else if (puntosSaruman > puntosGondor) {
    console.log('bloque if else', 'llamar refuerzos');
} else {
    console.log('bloque if else', 'salir corriendo');
}


if (puntosGondor > puntosSaruman) {
    console.log('luchamos');
} else {
    console.log('huir');
}

let ternaria = puntosGondor > puntosSaruman ? 'luchamos' : 'huir';

console.log('ternaria', ternaria);