// Funciones puras

// Side effects
// 1. Modificar variable globales
// 2. Modificar los parámetros de una función
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

function sum (a, b) {
    return a + b
}

// Funciones impuras

function sum2 (a, b) { // Esta función deja de ser pura
    console.log(a)
    return a + b
}

let total = 0

function sumWithsideEffect (a) {
    total += a
    return total
}
