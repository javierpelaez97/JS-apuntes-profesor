// DOCUMENT OBJECT MODELING

// hypertext markup language

// SELECTORES

/* 
var miTitulo = document.querySelector('#titulo-principal');

// Element: el bloque de código HTML, Node: el objeto JAVASCRIPT que contiene un Element.

// FORMA MEJOR DE SELECCIONAR ELEMENTOS
if (document.querySelector('#titulo-principal')) {
    var tituloPrincipal = document.querySelector('#titulo-principal');
}

// CREAR ELEMENTOS DOM
// definir el elemento
let subtitulo = document.createElement('h2');
subtitulo.classList = 'subtitulos';
subtitulo.innerHTML = '<em>Las últimas noticias</em>';
// colocarlo en el html
let cabecera = document.querySelector('#cabecera');
cabecera.appendChild(subtitulo);






// MÉTODOS DOM

tituloPrincipal.innerHTML = 'Noticias de la mañana'; // cambiar texto interior (si el elemento tiene dentro otros elementos también salen.)
tituloPrincipal.style.color = 'green';  // cambiar estilos. */

//let articulos = document.querySelectorAll('.articulo'); // Crear un nodeList (un array con muchos nodos de un tipo.)


/* articulos.forEach(articulo => {
    articulo.addEventListener('mouseover', () => {
        articulo.childNodes[3].className = "par-animado";
    })
    articulo.addEventListener('mouseout', () => {
        articulo.childNodes[3].className = "par";
    })
}); */


for(let articulo of articulos) {
    articulo.addEventListener('mouseover', () => {
        articulo.childNodes[3].className = "par-animado";
    })
    articulo.addEventListener('mouseout', () => {
        articulo.childNodes[3].className = "par";
    })
}

// EVENTOS DOM

let btn = 'busco el botón'

btn.addEventListener('mouseover', () => {
    // cosas que pasan al pulsar el boton
})

/* 
EVENTOS DEL RATÓN
click
dblclick
mousemove
mouseover
mouseout
*/

/* 
EVENTOS DEL TECLADO
keydown
*/

document.addEventListener("keydown", (event) => {
    console.log(event.location);
  });

/* 
EVENTOS DE FORMULARIO
onsubmit
*/



// EXTRAER PROPIEDADES DEL DOCUMENTO



