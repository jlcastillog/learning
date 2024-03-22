// Create Superhero object
function Superhero (name, colour, power){
    this.name = name
    this.colour = colour
    this.power = power
    this.isLeader = false

    this.displayinfo = function (){
        console.log(`Superhero information:
        Name: ${this.name}
        Colour: ${this.colour}
        Power: ${this.power}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }

    this.becomeLeader = function (){
        this.isLeader = true
        console.log(`${this.name} has become the leader`)
    }
}

const spiderMan = new Superhero('Spiderman','Red','Spider senese')
const superman = new Superhero('Superman','Blue','Super strong')
const batman = new Superhero('Batman','Dark','Revange')

spiderMan.displayinfo()
superman.displayinfo()
batman.displayinfo()

batman.becomeLeader()

spiderMan.displayinfo()
superman.displayinfo()
batman.displayinfo()