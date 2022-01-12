const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
let deckId;


function handleClick(){

    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        deckId = data.deck_id;
    })
    
}


newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", function(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        
        cardsContainer.children[0].innerHTML = `
        <img src=${data.cards[0].image}  class="card"/>`
        cardsContainer.children[1].innerHTML = `
        <img src=${data.cards[1].image} class="card" />`

    })
})