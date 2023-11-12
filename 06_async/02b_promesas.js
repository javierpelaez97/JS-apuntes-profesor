

/* const ganarLoteria = new Promise(function (resolve, reject) {    //Creamos una clase con una función  con resolve y reject
    setTimeout(function () {                                        //Creamos una función para crear la asincoronia
        const number = Math.random();                               //Math es un Método que devuelve un número aleatorio entre 0 y 1
        if (number > 0.5) {                         
            resolve('Ganaste el premio');                           //Se llama al método resolve si la promesa se devuelve cumplida.
        } else {
            reject(new Error('Perdiste el dinero'));
        }
    })
}); */


//ganarLoteria.then(a => console.log(result)).catch(error => console.error(error));


const addCardAsync = async (country = 'spain') => {                                               
    try {
        const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);            
        const data = await request.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// addCardAsync().then(result => console.log('1', result)).catch(error => console.error(error));

addCardAsync();   // También se puede instanciar de esta forma.

/* //forma nueva para isntanciar la asincronia es lo mismo que la de arriba.
(async () => {   //creamos una función anonima
    try {
        //throw new Error('test');
        const data = await addCardAsync();      //Llamamos al data y a la función 
        console.log(data);                      // nos imprime los datos de la funcion anterior
    } catch (error) {
        console.error(error);
    }
})(); */