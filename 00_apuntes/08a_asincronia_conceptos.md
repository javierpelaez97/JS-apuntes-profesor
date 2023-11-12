# ASINCRONÍA EN JAVASCRIPT - CONCEPTOS


## EL CÓDIGO SÍNCRONO

Para poder entender el concepto de asincronía definamos primero qué es su opuesto, la sincronía.

Un código síncrono es aquel en el que se ejecuta línea por línea (el que hemos manejado hasta ahora). Cada línea espera a que la anterior acabe para comenzar.

```javascript
const p = document.querySelector('.p'); // 1
p.textContent = 'Texto de ejemplo'; // 2
alert('texto cambiado'); // 3 -> se detiene la ejecución hasta que el usuario responde al alert.
p.style.color = 'red'; // 4
```

## EL CÓDIGO ASÍNCRONO

- El código asíncrono se ejecuta después de que termine una tarea "de fondo".
- No detiene la ejecución, difiere las tareas pendientes hasta que el proceso de fondon se completa.

En el ejemplo, el código contenido en setTimeout() es asíncrono, ya que no se ejecute hasta que no se cumpla la tarea de fondo, en este caso una cuenta atrás.
```javascript
console.log('linea 1'); // 1
setTimeout(function () {
    console.log('linea 2'); // 4 -> se ejecuta cuando acaba la cuenta atras.
}, 3000); // 2 -> se inicia una cuenta atrás como proceso de fondo.
console.log('linea 3'); // 3 
```

Hemos visto más casos de asincronía, el manejo de eventos del usuario también se realiza de forma asíncrona.
```javascript
const btn = document.querySelector('.my-btn'); // 1
btn.addEventListener('click', function() { // 2 -> se lanza el escuchador como tarea de fondo.
    console.log('botón pulsado'); // 4 -> cuando el usuario pulsa el botón, se ejecuta este bloque
});
console.log('línea tras el event listener'); // 3
```

## COMUNICACIÓN HTTP, CONCEPTOS

- **Client** (cliente): es la aplicación que realiza la petición (navegador, postman...).
- **Server** (servidor): el la aplicación que recibe la petición, la procesa y emite una respuesta.
- **HTTP Request** (peticion HTTP): es una solicitud a través de internet que incluye la dirección del servidor, los datos que requerimos y habitualmente alguna seguridad como secret key, un token...
- **HTTP Response** (respuesta HTTP): es la respuesta que el servidor devuelve al cliente con los datos solicitados.
- **API**: Application Programming Interface, es una capa de código que gestiona las peticiones HTTP, es decir, permite a las aplicaciones cliente y servidor hablar entre ellas.
- **JSON**: Javascript Object Notation, es un estandar similar a los objetos javascript mediante el cual se estructuran los datos de las peticiones.
- **AJAX**: Asynchronous Javascript and XML, es una librería que nos permite obtener datos de forma dinámica (sin recargar nuestra página) con un backend a través de peticiones API (no vamos a ver la parte de XML).
- **CORS**: Cross Origin Resource Sharing, es una medida de seguridad que puede bloquear el acceso a la API desde dominios de terceros.




