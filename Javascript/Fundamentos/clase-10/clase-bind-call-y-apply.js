function dogGrreting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Lucy'
const address = '123 Avenue' 

const newHouse = {
    dogName: 'Coconut'   
}

dogGrreting.call(newHouse, owner, address)

const values = [owner, address]

dogGrreting.apply(newHouse, values)

const binding = dogGrreting.bind(newHouse, owner, address)
console.log(binding)

binding()