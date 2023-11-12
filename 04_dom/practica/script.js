// DEFINIR LAS VARIABLES
document.addEventListener('DOMContentLoaded', function() {
    let botones = document.querySelectorAll('a');

    let btnSi = botones[0];
    let btnNo = botones[1];
    
    /* console.log('si', btnSi, 'no', btnNo); */
    
    btnSi.addEventListener('mouseover', function () {
        btnSi.innerHTML = 'No';
        btnNo.innerHTML = 'Sí';
        btnSi.style.background = 'red';
        btnNo.style.background = 'green';
    
    });
    
    btnSi.addEventListener('mouseout', function () {
        btnNo.innerHTML = 'No';
        btnSi.innerHTML = 'Sí';
        btnNo.style.background = 'red';
        btnSi.style.background = 'green';
    });
    
    
    let mensaje = document.createElement('p');
    mensaje.innerHTML = 'gracias por participar';
    
    if(document.querySelector('#card')) {
        document.querySelector('#card').appendChild(mensaje);
    }
    
});
