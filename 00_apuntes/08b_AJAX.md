# AJAX

Asynchronous Javascript and XML, Ajax nos permite hacer peticiones http a APIS.

Aunque es un método en desuso aun se puede encontrar con frecuencia.

```javascript
// 1. instanciamos la clase XMLHttpRequest, que gestionará las peticiones por nosotros.
var request = new XMLHttpRequest();

// 2. creamos una peticion tipo GET a una api de paises.
var country = 'spain';
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

// 3. añadimos un event listener a request para que resuelva la petición de forma asíncrona.
request.addEventListener('load', function () {
    // en este caso mostrará los datos en el navegador tras organizarlos un poco.
    const data = JSON.parse(this.responseText);
    document.querySelector('.container').textContent = JSON.stringify(data, null, 2);
});

// 4. lanzamos la petición
request.send();
```


```javascript
// en algunos casos puede que veamos el paso 3 de la siguiente manera (el funcionamiento es el mismo).
request.onreadystatechange = function(){
    const data = JSON.parse(this.responseText);
    /* resto del bloque */
}
```