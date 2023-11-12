'use strict';
/* 
// modelo para hacer una peticion tipo promesa:
const getMeows = (count) => fetch(`https://meowfacts.herokuapp.com/?count=${count}`) // Esto es una función para poder pedirlo las veces que queramos 
    .then(response => response.json()) // si fulfilled
    .then(data => console.log(data)) // si fulfilled
    .catch(error => console.error(error)); // si rejected

    getMeows(3);

// forma pre ECMA 6 que nos podemos encontrar en proyectos antiguos.
function getMeows2(count) {
    return fetch(`https://meowfacts.herokuapp.com/?count=${count}`) // petición
        .then(function (response) {
            return response.json(); // si fulfilled
        })
        .then(function (data) {
           return data; // si fulfilled
        })
        .catch(function (error) {
            console.error(error); // si rejected
        });
}

getMeows2(3).then(function(data) {
    console.log(data)
});

const gatos = getMeows2(5);

console.log('gatos', gatos); */



const addCard = (country = 'spain') => {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            // YA SE QUE FRONTERAS HAY
            // llamar a una funcion que me haga lo mismo, pero para el primer pais de la lista
            firstBorder(data[0].borders[0])
            addCountry(data[0]);
        })
        .catch(error => console.error(error));
}

const firstBorder = (country) => {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then (data => {
        addCountry(data[0])
    })
}


const addCountry = (data) => {
    if (data) {
        const htmlStr = `
            <article class="country">
            <img class="country-img" src="${data.flags.png}">
            <div class="country-data">
                <h3 class="country-name">${data.name.official}</h3>
                <h4 class="country-region">${data.region}</h4>
                <p class="country-row"><span>&#128107;</span>${formatNumberEs(data.population)}</p> 
                <p class="country-row"><span>&#128483;</span>${data.languages[Object.keys(data.languages)[0]]}</p>
                <p class="country-row"><span>&#128176;</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
            </div>
            </article>`;

        countriesContainer.insertAdjacentHTML('beforeend', htmlStr);
        countriesContainer.style.opacity = 1;
    }
}

const formatNumberEs = number => number.toLocaleString(
    'es-ES',
    { style: 'decimal', useGrouping: true, minimumFractionDigits: 0 }
);

