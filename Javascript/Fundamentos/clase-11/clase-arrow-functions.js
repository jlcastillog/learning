const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitTwoParameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`

// Lexical binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('with great power comes great resposability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Optopues.')