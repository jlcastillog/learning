// Card game: Specification:
// - Suffle the deck
// - Deal a specific number of card among players

const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const signs = ["♠", "♥", "♦", "♣"];

const deckCards = []

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function card (number, sigh) {
    this.number = number
    this.sigh = sigh
    this.displayCard = function () { 
        console.log(`${this.number} de ${this.sigh}`) 
    }
}

function player (name) {
    this.name = name
    this.hand = []
    this.displayHand = function () {
         console.log(`${this.name}`)
         this.hand.forEach (n => {
            if (typeof(n) !== typeof(undefined))
                n.displayCard()
         }) 
    }
}

function prepareDeckCards () {
    signs.forEach(sign => {
        values.forEach(value => {
            deckCards.push(new card(value, sign))
        })    
    })
}

const deckCardsShuffled = []

function shuffleCards () {
    while (deckCards.length > 0)
        deckCardsShuffled.push(deckCards.splice(random(0, deckCards.length - 1), 1)[0])
    
}

function dealCards (numberOfCards, players) {
    players.forEach(p => {
        for (let i = 0; i < numberOfCards; i++) {
            if (deckCardsShuffled.length > 0)
            {
                p.hand.push(deckCardsShuffled.splice(random(0, deckCardsShuffled.length - 1), 1)[0])
            }
        }
    })
}

// Create Players
const players = []
players.push(new player('Player 1'))
players.push(new player('Player 2'))
players.push(new player('Player 3'))
players.push(new player('Player 4'))

// Game
prepareDeckCards()
shuffleCards()
dealCards(15, players)

players.forEach(p => {
    p.displayHand()
    console.log('--------------------------')
})