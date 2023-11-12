const numeros = document.querySelectorAll('.numeros span')
const contador = document.querySelector('.contador')
const mensajeFinal = document.querySelector('.mensaje_final')
const repetir = document.querySelector('#repetir')

/**
 * Restablece el estado inicial de los elementos animados.
 * Esta función elimina clases, restablece valores y configura
 * la animación inicial para proporcionar un reinicio completo.
 * @returns {void}
 */
const reset = () => {
    contador.classList.remove('ocultar')
    mensajeFinal.classList.remove('mostrar')

    numeros.forEach((num) => {
        num.classList.value = ''
    })

    numeros[0].classList.add('in')
}

/**
 * Inicia la animación de números.
 * Esta función maneja los eventos de animación para cada número,
 * controlando la transición entre clases 'in' y 'out' para lograr
 * la animación deseada. Además, gestiona la visibilidad del contador
 * y del mensaje final al finalizar la animación.
 * @return {void}
 */
const ejecutar = () => {
    numeros.forEach((numero, index) => {
        const iterador = numeros.length - 1

        numero.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && index !== iterador) {
                numero.classList.remove('in')
                numero.classList.add('out')
            } else if (e.animationName === 'goOut' && numero.nextElementSibling) {
                numero.nextElementSibling.classList.add('in')
            } else {
                contador.classList.add('ocultar')
                mensajeFinal.classList.add('mostrar')
            }
        })
    })
}

repetir.addEventListener('click', () => {
    reset()
    ejecutar()
})

document.addEventListener('DOMContentLoaded', ejecutar);
