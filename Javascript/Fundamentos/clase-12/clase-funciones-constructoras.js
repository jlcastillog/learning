function Rocket (name) {
    this.name = name
    this.launchMessage = function () {
        console.log(`${this.name} launch succed!!`)
    }
}

const falcon9 = new Rocket('Falcon 9')
const falconHeavy = new Rocket('Falcon Heavy')

falcon9.launchMessage()
falconHeavy.launchMessage()