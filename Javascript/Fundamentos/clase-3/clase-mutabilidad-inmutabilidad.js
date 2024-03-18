// Tipo de dato primitivo - Inmutable
let numero = 10;
numero = numero + 3
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//Tipo de dato complejos - Mutables
let usuario = {nombre: "Carlos", edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana','pera']
frutas[0] = 'platano'
console.log(frutas)

function cambiarNombre (objecto) {
    objecto.nombre = 'Nuevo nombre'
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)
console.log(persona)