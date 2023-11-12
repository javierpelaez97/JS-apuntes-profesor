# CLASES EN JAVASCRIPT
Aunque javascript en sus usos mas modernos ha renunciado en buena parte al paradigma de clases en favor del uso generalizado de la notación JSON, nos puede resultar útil tener unos conceptos básicos por si nos fuesen útiles o nos los encontrásemos en el futuro.

## CONCEPTOS

- **JSON**: (javascript object notation): es un estandar para crear objetos tipo clave-valor que ha tenido mucho éxito, ya que además de para programar se utiliza tanto para transferencia de datos (peticiones http) como para almacenamiento en base de datos (tecnología Mongo DB).
```json
{
  "pet_name": "Constantine",
  "pet_type": "cat",
  "age": 7,
  "breed": "Siamese",
  "owner_name": "Facundo Tannhauser"
}
```
- **CLASS**: una clase es una representación abstracta de cualquier entidad, algo así como los planos. Por ejemplo, Perro sería una entidad o clase que hace referencia a un perro genérico, mientras que Lassie o Milú serían instancias (objetos) de la clase Perro.

- **ATRIBUTOS**: es cada uno de los parámetros que aportan información significativa a nuestra clase, por ejemplo, para Perro, los datos de interés que podríamos necesitar serían: edad, raza, historial veteninario, nombre del dueño... Esros atributos se almacenarán dentro de la clase.

- **MÉTODOS**:  los métodos son funciones ligadas a una clase, que solo se pueden ejecutar sobre objetos que sean instancia de ella.

## EJEMPLO DE CLASE

```javascript
// las clases se crean con la palabra reservada Class, por convención la primera letra es en mayúsculas.

class Perro {
    // CONSTRUCTOR: lo usaremos si queremos obligar a que se proporcionen determinados datos (atributos) en el momento de instanciar la clase.
    constructor(nombre, nombreDueno, raza, edad) {
        this.nombre = nombre;
        this.nombreDueno = nombreDueno;
        this.raza = raza;
        this.edad = edad;
        this.zapatosDestruidos = 0; // podemos crear clases con atributos con un balor determinado.
    }

    // UNA VEZ HEMOS DEFINIDO LOS ATRIBUTOS, PODREMOS DEFINIR MÉTODOS.
    ladrar() {
        console.log('ruf ruf');
    }

    morderZapato() {
        this.zapatosDestruidos++;
    }
}

// Ahora podemos crear objetos tipo Perro, asegurándonos de que todos los objetos que se creen van a seguir el patrón de diseño que hemos definido.

const milu = new Perro('Milú', 'Tintín', 'Fox Terrier', 6);
const scoobyDoo = new Perro('Scooby-Doo', 'Shaggy', 'Gran Danés', 7);

// y podemos usar los métodos que hayamos creado(*).
milu.ladrar();
```

