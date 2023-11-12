# DOCUMENT OBJECT MODELING

DOM es un conjunto de métodos y herramientas que nos permiten convertir los elementos de un xml (y por extensión de HTML) en objetos de javascript. Esto permite implementar lógica para modificar o dinamizar los documentos.

En adelante utilizaremos solo el término HTML por simplificar, pero todas las definiciones o métodos son también válidos para XML

## Conceptos

- Node: objeto javascript que contiene un Element.
- Element: cualquier elemento HTML, es decir, cualquier texto contenido por etiquetas incluyendo las propias etiquetas. Hay que tener en cuenta que un Element puede tener otros Elements dentro de él.
- Atributo: modificador que añade información a un Element
```html
<!-- el atributo href nos indica la dirección a la que apunta el Element a -->
<a href="miweb.com">Mi web</a>
```
- NodeList: Array que recoje todos los nodos resultado de una consulta.
- Document: es la representación en memoria de la web (el nodo donde está todo)

## Selectores
Sirven para localizar un elemento html y guardarlo en una variable javascript. Usaremos principalmente estos dos:

- document.querySelector(): lo usamos para capturar un elemento concreto.
```javascript
document.querySelector('#my-id');
```

- document.querySelectorAll(): lo usaremos para crear un NodeList
```javascript
document.querySelectorAll('.my-class');
```

## Crear nodos (Node)

```javascript
document.createElement('tag');
# ejemplo
let divNode = document.createElement('div');
```

## Asignar selectores CSS (Node).

### id
Los id de nodos son identificadores únicos y debemos tener cuidado a la hora de asignarlos ya que no generaremos errores ni avisos, pero podremos tener problemas a la hora de usar funciones DOM.

Es recomendable aplicar clases por defecto y reservarse la asignación de id para problemas o soluciones urgentes.

Asignamos un id:
```javascript
divNode.setAttribute('id', 'div-65');
```

### class
```javascript
// agregar n clases a un nodo.
divNode.classList.add('my-class', 'my-class-2');

// eliminar n clases a un nodo.
divNode.classList.remove('my-class', 'my-class-2');

// podemos utilizar estos métodos con un spread operator.
const cls = ['visible', 'texto-azul', 'padding-20'];
divNode.classList.add(...cls);
divNode.classList.remove(...cls);

// incluir una clase si no está; si está, eliminarla.
divNode.classList.toggle('visible');

// sustituir una clase por otra.
divNode.classList.replace('visible', 'hidden');
```


## Modificaciones (Node)

Para poder realizar esto, tenemos que tener claro que:

- Un atributo es un modificador del elemento html
```html
<img src='./foto.jpg'>
```

- Un parámetro se refiere al objeto javascript de la clase node:
```javascript
// esto es pseudocódigo para el ejemplo
p {
    innerHTML: 'texto que hay en el div',
    classList: ['verde', 'texto-negrita', 'padding20']
}
```

**!!! Un mismo dato puede estar en atributos y en parámetros, si existe como atributo lo mejor es modificarlo como atributo.**

### Modificar atributos
Podemos alterar cualquier atributo html de la siguiente manera:
```javascript
// para añadir un atributo nuevo
inputNode.setAttribute('name', 'email');

// hay algunos atributos que no tienen valor como required o disabled.
inputNode.setAttribute('required', '');

// para leer el valor de un atributo:
inputNode.getAttribute('name');
```

### Modificar parámetros
Para modificar los parámetros, procedemos como con cualquier objeto javascript, es importante añadir una capa de verificacion.
```javascript
// cambiar el innerHTML de un elemento que hemos capturado en la variable text.
if (text.innerHTML) {
    text.innetHTML = 'mi texto';
}

```

## Colecciones de Nodos (NodeList)

Un NodeList es un array que contiene múltiples nodos que comparten el mismo selector css. La obtendremos a través del método **querySelectorAll**

### El método querySelectorAll -> Selección de objetos en bloque

```javascript
// SELECCIÓN BÁSICA: obtener todos los elemetos de la clase article
const articles = document.querySelectorAll('.article'); 

// podemos querer obtener los elementos de varios selectores CSS, usar con cuidadon ya que no es recomendable mezclar elementos que no tienen nada en común en la misma lista.
const news = document.querySelectorAll('.sports-news, .tech-news'); 

// SELECCIÓN ANIDADA: obtener todos los elemetos p dentro de un elemento con el id primer-articulo
const texts = document.querySelectorAll('#first-article > p'); 

// SELECCIÓN POR ELEMENTO-ATRIBUTO: obtener todos los articulos que tengan el atributo data-src
const articlesDB = document.querySelectorAll('.article[data-src]'); 

// SELECCION POR ELEMENTO-ATRIBUTO DEFINIENDO VALOR: obtener todos los articulos que tengan el atributo data-src='./archive'   
const articlesDB = document.querySelectorAll(".article[data-src='./archive']"); 

// SELECCION SOLO POR ATRIBUTO: todos los elementos que sean required
const requiredNodes = document.querySelectorAll('[required]');

// iterar una coleccion
articles.forEach(node => {
    // node será cada uno de los elementos del array.
    console.log(node.getAttribute('innerHTML'));
});
```

### Métodos de NodeList

- NodeList es un array, por lo que los métodos de array son tambien válidos.

```javascript
// añadir elemento (cuidado con esto, que JS no comprueba tipos)
articles.push(element)

// obtener un elemento por índice
articles[1];

// iterar una coleccion
articles.forEach(node => {
    // node será cada uno de los elementos del array.
    console.log(node.getAttribute('innerHTML'));
});
```







