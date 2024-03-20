// Social media profile

// 1. User information
const userName = 'platziUser'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

// 2. Address
const address = {
    street: '1234 Main Street',
    city: 'Ciudad Real',
    state: 'Castilla la Mancha',
    sipCode: '5421'
}

// 3. Hobbies
const hobbies = ['Coding','Reading','travelling','Climbing']

// 4. Generating custom bio
const customBio = `Hello. My name is ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

// 5. Print the user profile and bio
console.log(customBio)