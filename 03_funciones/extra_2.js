// PASO 1, CREAR LA LÓGICA PARA CADA USER INDIVIDUAL
let personalbar = {
    name: 'El culebra',
    favoritesSounds: {
        waves: { format: 'mp3', volume: 67 },
        wind: { format: 'ogg', volume: 35 },
        firecamp: { format: 'mp3', volume: 60 },
    }
};

/* for (let key in personalbar.favoritesSounds) {
    console.log(key, typeof (key));
    console.log(personalbar.favoritesSounds[key]);
}
 */

let media = 0;
for (let key in personalbar.favoritesSounds) {
    media += personalbar.favoritesSounds[key].volume / 3;
}
//console.log(media)


// PASO 2, GENERERALIZARLA CON UNA FUNCIÓN
const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

function mediaTotalUsers(users) {
    const numeroUsuarios = users.length;
    let sumaUsuarios = 0;
    for (user of users) {
        let mediaIndividual = 0;
        for (let key in user.favoritesSounds) {
            mediaIndividual += user.favoritesSounds[key].volume / 3;
        }
        sumaUsuarios += mediaIndividual / numeroUsuarios;
    }
    return sumaUsuarios;
}

console.log(mediaTotalUsers(users));