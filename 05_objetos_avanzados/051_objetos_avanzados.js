// Uso de funciones para crear objetos

function crearPersona(nombre, apellido, edad, direccion) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        direccion: direccion,
        saludar() {
            // THIS -> es una palabra reservada que sirve para hacer referencia al propio objeto cuando creamos métodos de objetos.
            console.log('Hola, me llamo', this.nombre);
        }
    }
}

let antonio = crearPersona('Antonio', 'Pérez', 45, 'Madrid');

antonio.saludar();



// Usar "in" como un "==" para propiedades de objetos -> es obligatorio usar comillas para la propiedad

if ('edad' in antonio) {
    // hacer algo
}




