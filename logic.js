var suits = [
    "Clubs",
    "Hearts",
    "Spades",
    "Diamonds"
]
var ID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardDeck = []
var player = {name: "player", points: 0, hand: []}
var computer = {name: "computer", points: 0, hand: []}

for (var i = 0; i < ID.length; i++) {
    for(var x = 0; x < suits.length; x++) {
        var value = parseInt(ID[i]);
        if (ID [i] ===  "J" ||ID [i] === "Q" ||ID [i] === "K") {
            value = 10
        } else if(ID[i] === "A") {
            value = 11
        }
        var card = {Suits: suits[x], ID: ID[i], Value: value}
        cardDeck.push(card)
    }
}



function shuffle() {
    for (var j = 0; j < 1000; j++){
        var location1 = Math.floor(Math.random() * cardDeck.length)
        var location2 = Math.floor(Math.random() * cardDeck.length)
        var temp = cardDeck[location1]

        cardDeck[location1] = cardDeck[location2]
        cardDeck[location2] = temp
    }
}
shuffle() 
function assignCards() {
    player.hand.push(cardDeck[1]) 
    player.hand.push(cardDeck[2])
    computer.hand.push(cardDeck[3])
    computer.hand.push(cardDeck[4])
}
assignCards()
function checkPlayerCardValue () {
    player.points = 0
    for(b = 0; b < player.hand.length; b++) {
        player.points += player.hand[b].Value
    }
}
function checkComputerCardValue () {
    computer.points = 0
    for(b = 0; b < computer.hand.length; b++) {
        computer.points += computer.hand[b].Value
    }
}
checkPlayerCardValue()
checkComputerCardValue()
