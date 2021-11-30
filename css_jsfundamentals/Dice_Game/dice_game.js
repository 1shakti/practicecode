let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

let Msg = document.getElementById("message");
console.log(Msg);
let player1Scoreboard = document.getElementById("player1Scoreboard");
let player2Scoreboard = document.getElementById("player2Scoreboard");
let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


rollBtn.addEventListener("click", function(){

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if(player1Turn){ 
        player1Dice.textContent = randomNumber;
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        Msg.textContent = "Player 2 Turn";
    }else{
        player2Dice.textContent = randomNumber;
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        Msg.textContent = "Player 1 Turn";
    }

    // if(player1Turn){
    //     player1Turn = false;
    // }else{
    //     player1Turn = true;
    // }

    if(player1Score >= 20){
        Msg.textContent = "Player 1 has won! 🥳";
        showDisplayButton();
    }else if(player2Score >= 20){
        Msg.textContent = "Player 2 has won! 🎉";
        showDisplayButton();
    }

    player1Turn = !player1Turn;
    // 1. Display the dice number instead of logging it out
    // 2. Use the 'active' class to show which player's turn it is 
    // Hint: use the .classList.remove() and classList.add() methods
    // 3. Update the "message" DOM node so that it states who's turn it is

})


resetBtn.addEventListener("click", function(){
    reset()
})
 
function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}