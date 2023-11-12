

/* const ganarLoteria = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const number = Math.random();
        if (number > 0.5) {
            resolve('Ganaste el premio');
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

//addCardAsync();

(async () => {
    try {
        //throw new Error('test');
        const data = await addCardAsync();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();