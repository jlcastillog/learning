// Enlace implícito · Implicit binding

const house ={
    dogName: 'Modjo',
    dogGreeting: function (){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting()

// Enlace explícito · Explicit binding

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Pery'
}

dogGreeting.call(newHouse)

function dogGreetingWithOwner (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} in ${address}`)
}

const owner = 'Lucy'
const address= 'Avenue 123'

dogGreetingWithOwner.call(newHouse, owner, address)