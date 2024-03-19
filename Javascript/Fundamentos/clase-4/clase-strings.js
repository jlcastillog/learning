// Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas ladeadas`

// 1. Concatenacion: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es: ' + direccion + ' ' + ciudad
console.log(direccionCompleta)

// 2. Concatenacion: Template literals
const nombre = 'Jose Luis'
const pais = 'España'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion) 

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente'
const terceraParte = 'de Mexico'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenacion: concat()
const hobbie1 = 'escalar'
const hobbie2 = 'viajar'
const hobbie3 = 'leer'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3, '.')
console.log(hobbies)

// Caracteres de escape
// const whatDoIDo = 'I'm software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm software Engineer"

// 2. Barra invertida
const barrainvertida = 'I\'m software Engineer'

// 3. Template literals
const templateLiterals = `I'm software Engineer`

// Escritura de strings largos
/*
Todavía tengo casi todos mis dientes
casi todos mis cabellos y poquísimas canas
puedo hacer y deshacer el amor
trepar una escalera de dos en dos
y correr cuarenta metros detrás del ómnibus
o sea que no debería sentirme viejo
pero el grave problema es que antes
no me fijaba en estos detalles.
*/ 
const poema = 'Todavía tengo casi todos mis dientes\n' +
              'casi todos mis cabellos y poquísimas canas\n' +
              'puedo hacer y deshacer el amor\n' +
              'trepar una escalera de dos en dos\n' +
              'y correr cuarenta metros detrás del ómnibus\n' +
              'o sea que no debería sentirme viejo\n' + 
              'pero el grave problema es que antes\n' + 
              'no me fijaba en estos detalles'

console.log(poema)

const poema2 = "Todavía tengo casi todos mis dientes\n\
casi todos mis cabellos y poquísimas canas\n\
puedo hacer y deshacer el amor\n\
trepar una escalera de dos en dos\n\
y correr cuarenta metros detrás del ómnibus\n\
o sea que no debería sentirme viejo\n\
pero el grave problema es que antes\n\
no me fijaba en estos detalles"

console.log(poema2)

const poema3 = `Todavía tengo casi todos mis dientes
casi todos mis cabellos y poquísimas canas
puedo hacer y deshacer el amor
trepar una escalera de dos en dos
y correr cuarenta metros detrás del ómnibus
o sea que no debería sentirme viejo
pero el grave problema es que antes 
no me fijaba en estos detalles`

console.log(poema3)

// String primitivo
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof(stringPrimitivo))

const stringPrimitivoTambien = String('Soy un string prmitivo')
console.log(typeof(stringPrimitivo))

// String de tipo objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof(stringObjeto))

// Acceder a caracteres
const saludo = 'Hola. ¿Como estás?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('l'))
