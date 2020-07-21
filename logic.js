alert("This is a test")


var suits = [
    "Clubs",
    "Hearts",
    "Spades",
    "Diamonds"
]
var ID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardDeck = []
var userCardOne;
var userCardTwo;
var dealerCardOne;
var dealerCardTwo

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
console.log("done shuffling") 
function assignCards() {
    userCardOne = cardDeck[1]
    userCardTwo = cardDeck[2]
    dealerCardOne = cardDeck[3]
    dealerCardTwo = cardDeck[4]
}
assignCards()
console.log(userCardOne + userCardTwo + dealerCardOne + dealerCardTwo)