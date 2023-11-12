const coches = [
    {modelo: 'Seat Ibiza', estado: 'disponible'},
    {modelo: 'BMW 120D', estado: 'mantenimiento'},
    {modelo: 'Alfa Romeo Giulia', estado: 'disponible'},
    {modelo: 'Fiat 500', estado: 'averia'},
    {modelo: 'Ford Fiesta', estado: 'disponible'},
    {modelo: 'VW Golf', estado: 'mantenimiento'},
];

console.log(`Los coches disponibles son: ${coches.filter(coche => coche.estado === 'disponible').map(coche => coche.modelo).join(', ')}.`);