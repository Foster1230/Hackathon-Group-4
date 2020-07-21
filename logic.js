alert("This is a test")


var suits = [
    "Clubs",
    "Hearts",
    "Spades",
    "Diamonds"
]
var ID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardDeck = []


for (var i = 0; i < ID.length; i++) {
    for (var x = 0; x < suits.length; x++) {
        var value = parseInt(ID[i]);
        if (ID[i] === "J" || ID[i] === "Q" || ID[i] === "K") {
            value = 10
        } else if (ID[i] === "A") {
            value = 11
        }
        var card = { Suits: suits[x], ID: ID[i], Value: value }
        cardDeck.push(card)
    }
}


console.log(cardDeck)
console.log(card)

var sevenC = { Suit: "Club", Value: "7", }
var test = [sevenC];

//setting up winning game conditions
function checkgame() {
    if ((computerValue < playerValue < 21) || (computerValue > 21) || (playerValue === 21)) {
        wins++
        alert("the round goes to " + playerName + "!");
    } else if ((playerValue < computerValue < 21) || (playerValue > 21) || (computerValue === 21)) {
        lose++
        alert("The dealer won this round!");
    }
}

    console.log(sevenC);