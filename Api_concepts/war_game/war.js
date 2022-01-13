let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")


async function handleClick(){

    const resp = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await resp.json();
    remainingText.textContent =  `Remaining cards: ${data.remaining}`;
    deckId = data.deck_id;
    
}


newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", async () => {
    const resp = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await resp.json();
    
    console.log(data);
    remainingText.textContent =  `Remaining cards: ${data.remaining}`;        
    cardsContainer.children[0].innerHTML = `
    <img src=${data.cards[0].image}  class="card"/>`
    cardsContainer.children[1].innerHTML = `
    <img src=${data.cards[1].image} class="card" />`

    const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
    header.textContent = winnerText;

    if (data.remaining === 0) {
        drawCardBtn.disabled = true
        if (computerScore > myScore) {
            // display "The computer won the game!"
            header.textContent = "The computer won the game!"
        } else if (myScore > computerScore) {
            // display "You won the game!"
            header.textContent = "You won the game!"
        } else {
            // display "It's a tie game!"
            header.textContent = "It's a tie game!"
        }
    }
    
});

/**
 * Challenge:
 * 
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * Part 2:
 * Instead of logging the winner to the console, 
 * display an `h2` on the screen above the 2 cards 
 * that declares who the winner is.
 * 
 * If card1 is the higher card, display "Computer wins!"
 * If card2 is the higher card, display "You win!"
 * If they're equal, display "War!"
 */


 function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`

    } else {
        return "War!"
    }
}
// Keeping this test case for reference, but should delete later
// const card1Obj = {
//     value: "JACK"
// }
// const card2Obj = {
//     value: "QUEEN"
// }

// determineCardWinner(card1Obj, card2Obj)

