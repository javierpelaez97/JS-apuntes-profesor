'use strict';

// instancio la clase XMLHttpRequest para gestionar la peticion AJAX.
var request = new XMLHttpRequest();

// preparo los datos de la petición: ¿qué voy a pedir y a dónde?
var country = 'spain';
request.open('GET', `https://restcountries.com/v3.1/name/${country}`); 

// preparo la lógica que se ejecutará cuando venga la respuesta (no sé lo que va a tardar).
request.addEventListener('load', function() {
    const data = JSON.parse(this.response); // transformo la respuesta en un objeto JSON para poder operar.
    console.log(data);
});
// lanzo la petición
request.send();



