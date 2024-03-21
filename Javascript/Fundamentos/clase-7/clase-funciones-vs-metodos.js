// Capacidades que tienen las funciones al igual que otros métodos

// 1. pasar funciones como argumentos -> callback
function a(){}
function b(a){}

b(a)

// 2. Retornar funciones

function c (){
    function b (){}
    return b
}

// 3. Asignar funciones a variables -> Expresión de función

const d = function() {} // La función no tiene nombre aqui

// 4. Tener propiedades y métodos

function e (){}
const obj = {}
e.call(obj)

// 5. Anidar funciones -> Nested functions

function f (){
    function g (){
        function h (){
        
        }
        h()
    }
    g()
}
f()

// 6. ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function () {console.log('Launched')}
}

rocket.launchMessage()