
  
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
function restartGame() {
    player = { name: "player", points: 0, hand: [] }
    computer = { name: "computer", points: 0, hand: [] }
    userturn = true
    nextCard = 0
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



function shuffle() {
    for (var j = 0; j < 1000; j++) {
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
    alert("Your hand is " + player.hand[0] + " and " + player.hand[1] + ". The computer's face up card is " + computer.hand[0] + ".")
}

//render player cards
function renderCards () {
    document.getElementById("card-deck").innerHTML = "";
    document.getElementById("computer-card-deck").innerHTML = "";
    for(var p = 0; p < player.hand.length; p++) {
        var card = document.createElement("div")
        var cardID = document.createElement("div");
        var suitRendered = document.createElement("div")
        card.className = "card";
        cardID.className = "cardID"
        suitRendered.className = "suit " + player.hand[p].Suits;

        cardID.innerHTML = player.hand[p].ID;
        suitRendered.innerHTML = player.hand[p].Suits
        card.appendChild(suitRendered)
        card.appendChild(cardID)
        document.getElementById("card-deck").appendChild(card)
    }
    for(var g = 0; g < computer.hand.length; g++) {
        var card = document.createElement("div")
        var cardID = document.createElement("div");
        var suitRendered = document.createElement("div")
        card.className = "card";
        cardID.className = "cardID"
        suitRendered.className = "suit " + computer.hand[g].Suits;

        cardID.innerHTML = computer.hand[g].ID;
        suitRendered.innerHTML = computer.hand[g].Suits
        card.appendChild(suitRendered)
        card.appendChild(cardID)
        document.getElementById("computer-card-deck").appendChild(card)
    }
//     document.getElementById('card-deck').innerHTML = "";

//     document.getElementById('computer-card-deck').innerHTML = "";
//     for (var p = 0; p < player.hand.length; p++) {
//         var card = document.createElement("div");
//         var value1 = document.createElement("div")
//         var suitRendered = document.createElement("div")
//         card.className = "card"
//         value1.className = "value"
//         suitRendered.className = "suit " + player.hand[p].suit

//         value1.innerHTML = player.hand[p].ID
//         suitRendered.innerHTML = player.hand[p].Suits
//         card.appendChild(value1)
//         card.appendChild(suitRendered)

//         document.getElementById("card-deck").appendChild(card)
//     }
//     for (var g = 0; g < computer.hand.length; g++) {
        
//         var card = document.createElement("div");
//         var value1 = document.createElement("div")
//         var suitRendered = document.createElement("div")
        
//         card.className="card"
        
//         value1.className = "value"
//         suitRendered.className = "suit " + computer.hand[g].suit

//         value1.innerHTML = computer.hand[g].ID
//         suitRendered.innerHTML = computer.hand[g].Suits
//         card.appendChild(value1)
//         card.appendChild(suitRendered)

//         document.getElementById("computer-card-deck").appendChild(card)

//         suit.className = "suit " + player.hand[p].suit

//         value1.innerHTML = player.hand[p].Value
//         suit.innerHTML = player.hand[p].Suits


}


assignCards()
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
    alert("this is to see if everything renders")
    restartGame()
}





//DOMManipulation for user wins and losses
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
function computerChecker() {
    if (computer.points < 17) {

        computer.hand.push(cardDeck[nextCard])
        
        nextCard++
        checkComputerCardValue()
        renderCards()
        computerChecker()
    } else if (computer.points === 17 || computer.points > 17 && computer.points < 21 || computer.points === 21) {
        alert("the dealer stands")
        compareScores()
    } else if (computer.points > 21) {
        alert("The dealer has bust")
        playerWins++
        document.getElementById("Wins").innerHTML = ""
        userWon()
        restartGame()

    }

}


function computerTurn() {
    computerChecker()
}
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
    }
















