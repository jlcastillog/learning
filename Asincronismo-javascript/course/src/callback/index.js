/*
    CALLBACKS
*/

// Ejemplo 1

function sum (num1, num2) {
    return num1 + num2
}

function calc (num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(3, 6, sum))

// Ejemplo 2

setTimeout(function () {
    console.log('Hola javascript!!')
}, 2000)

//Ejemplo 3

function greeting (name) {
    console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, 'Jose');