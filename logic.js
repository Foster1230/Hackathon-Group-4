
// Define variables for card arrays, player/computer hands, player/computer values
var suits = [
    "Clubs",
    "Hearts",
    "Spades",
    "Diamonds"
]
var ID = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardDeck = []
var player = { name: "player", points: 0, hand: [] }
var computer = { name: "computer", points: 0, hand: [] }
var playerWins = 0
var playerLosses = 0
var nextCard = 0
var userturn = true
var tempCard;



// Define functions (restarting the game, creating card deck)
function restartGame() {
    player = { name: "player", points: 0, hand: [] }
    computer = { name: "computer", points: 0, hand: [] }
    userturn = true
    nextCard = 0
    cardDeck.length = 0
    createDeck()
    shuffle()
    assignCards()
    renderCards()
    checkPlayerCardValue()
    checkComputerCardValue()
}
function createDeck() {
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
}
createDeck()


// Shuffling deck and assign cards from the deck to player and computer
function shuffle() {
    for (var j = 0; j < 10000; j++) {
        var location1 = Math.floor(Math.random() * cardDeck.length)
        var location2 = Math.floor(Math.random() * cardDeck.length)
        var temp = cardDeck[location1]

        cardDeck[location1] = cardDeck[location2]
        cardDeck[location2] = temp
    }
}
shuffle()
function assignCards() {
    player.hand.push(cardDeck[51])
    player.hand.push(cardDeck[50])
    computer.hand.push(cardDeck[49])
    computer.hand.push(cardDeck[48])
}

// Render player & computer cards
function renderCards () {
    document.getElementById("card-deck").innerHTML = "";
    document.getElementById("computer-card-deck").innerHTML = "";
    for(var p = 0; p < player.hand.length; p++) {
        var card = document.createElement("div")
        var cardID = document.createElement("div");
        var suitRendered = document.createElement("div")
        card.className = "card";
        cardID.className = "cardID"
        suitRendered.className = "suit-" + player.hand[p].Suits;

        cardID.innerHTML = player.hand[p].ID;
        card.appendChild(suitRendered)
        card.appendChild(cardID)
        document.getElementById("card-deck").appendChild(card)
    }
    for(var g = 1; g < computer.hand.length; g++) {
        var card = document.createElement("div")
        var cardID = document.createElement("div");
        var suitRendered = document.createElement("div")
        card.className = "card";
        cardID.className = "cardID"
        suitRendered.className = "suit-" + computer.hand[g].Suits;

        cardID.innerHTML = computer.hand[g].ID;
        card.appendChild(suitRendered)
        card.appendChild(cardID)
        document.getElementById("computer-card-deck").appendChild(card)
    }

}
assignCards()
// Checks the vlaue of the player's and computer's hand
function checkPlayerCardValue() {
    player.points = 0
    for (b = 0; b < player.hand.length; b++) {
        player.points += player.hand[b].Value
    }
}
function checkComputerCardValue() {
    computer.points = 0
    for (b = 0; b < computer.hand.length; b++) {
        computer.points += computer.hand[b].Value
    }
}
checkPlayerCardValue()
checkComputerCardValue()
renderCards()
// Winning and Losing conditions
function compareScores() {

    checkPlayerCardValue()
    checkComputerCardValue()
    if (player.points > computer.points) {
        alert("You won: You had a score of " + player.points + " and the computer had a score of " + computer.points)
        playerWins++
        document.getElementById("Wins").innerHTML = ""
        userWon()
    } else if (player.points === computer.points) {
        alert("This round is a push. Both you and the dealer had a score of " + player.points)
    } else if (player.points < computer.points) {
        alert("You lost: You had a score of " + player.points + " and the computer had a score of " + computer.points)
        playerLosses++
        document.getElementById("Losses").innerHTML = ""
        userLost()
    }
    restartGame()
}





//DOMManipulation for displaying Wins and Losses
var targetDiv = document.getElementById("Wins")
var targetDiv2 = document.getElementById("Losses")
targetDiv.append(playerWins)
targetDiv2.append(playerLosses)

function userWon() {
    targetDiv.append("Wins: " + playerWins)
}
function userLost() {
    targetDiv2.append("Losses: " + playerLosses)
}
// Coding the dealer's turn
function computerChecker() {
    if (computer.points < 17) {
        tempCard = cardDeck[nextCard]
        computer.hand.push(cardDeck[nextCard])
        nextCard++
        alert("The dealer drew the " + tempCard.ID + " of " + tempCard.Suits + ".")
        checkComputerCardValue()
        checkForAceComputer()
        alert("The dealer's new total is " + computer.points + ".")
        
        
        
        renderCards()
        
        computerChecker()
    } else if (computer.points === 17 || computer.points > 17 && computer.points < 21 || computer.points === 21) {
        
        checkComputerCardValue()
        alert("the dealer stands")
        compareScores()
    } else if (computer.points > 21) {
        checkForAceComputer()
        
        alert("The dealer has bust")
        playerWins++
        document.getElementById("Wins").innerHTML = ""
        userWon()
        restartGame()

    }

}
// Alerts the player of the dealer's hidden card + value of the dealer's hand
function computerTurn() {
    alert("The dealer's face down card is the " + computer.hand[0].ID + " of " + computer.hand[0].Suits + ".")
    checkComputerCardValue()
    alert("The dealer's current total is " + computer.points + ".")
    computerChecker()
}
// Allows ace to have a value of 1 || 11 if the player's hand is over 21
function checkForAce() {
    for(var r = 0; r < player.hand.length; r++){
        if(player.hand[r].Value === 11 && player.points > 21){
            player.hand[r].Value = 1
            checkPlayerCardValue()
            

        } 
    }
    if(player.points > 21) {
        alert("You have gone over 21 and have bust")
        playerLosses++
        document.getElementById("Losses").innerHTML = ""
        userLost()
        restartGame() 
    }
}
// Allows ace to have a value of 1 || 11 if the computer's hand is over 21
function checkForAceComputer () {
    for(var r = 0; r < computer.hand.length; r++){
        if(computer.hand[r].Value === 11 && computer.points > 21){
            computer.hand[r].Value = 1
            checkComputerCardValue()
            alert("The dealer had an ace. The ace's value is now 1. The dealer has a total of " + computer.points + ".")
            computerChecker()

            

        } 
    }
}

// Connecting hit and stand buttons to logic
function hitFunction() {
    console.log("This is where the hit function will go.");
    player.hand.push(cardDeck[nextCard])
    nextCard++
    renderCards()
    checkPlayerCardValue();
    checkForAce ()
    if (player.points > 21) {
        checkForAce ()
        

    }
}
    function standFunction() {
        console.log("This is where the stand function will go.");
        userturn = false
        checkPlayerCardValue()
        renderCards ()
        computerTurn()
        if (computer.points >21){
            checkForAceComputer()
        }
    }
















