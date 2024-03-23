/*
Jugemos a adivinar la palabra

El usuario tien 3 intentos para adivinar la palabra oculta

Requerimientos:

- El juego debe de tener una palabra oculta
- El juego puede dar 1 pista de palabra
- El usuario debe de ingresar una suposición
- El juego debe verificar si la suposición del usuario es correcta
- El juego debe de tener un número limitado de intentos
- El juego debe de terminar cuando el usuario averigüe la palabra o se quede sin intentos
*/

let palabraOculta = 'javascript'
let intentos = 3

function verificarSuposicion (suposicion, palabraOculta) {
    return suposicion.toLowerCase() === palabraOculta
}

function jugarAdivinaLaPalabra(){
    alert('Bienvenido a jugar a adivina la palabra oculta')
    alert('Tienes 3 intentos para adivinar la palabra')
    alert('-pista- La palabra es un lenguaje de programación')

    while (intentos > 0 || esCorrecto)
    {
        let suposicionUsuario = prompt('Adivina la palabra: ')

        if (verificarSuposicion(suposicionUsuario, palabraOculta)) {
            alert('Enhorabuena, advinaste la palabra oculata!!!')
            break
        }
        else {
            intentos--
            if (intentos > 0) {
                alert(`Incorrecto. Aun tienes ${intentos} intentos`)
            }
            else {
                alert(`Agotados los intentos. La palabra coulata era: ${palabraOculta}`)
            }
        }

    }
}

jugarAdivinaLaPalabra()