const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
let width = 10;


function createGrid() {
    //create 100 of these elements with a for loop
    for(let i = 0; i < 100; i++){
     //create element
    const square = document.createElement('div');
    console.log(square);
    //add styling to the element
    square.classList.add('square');
    //put the element into our grid
    grid.appendChild(square);
    //push it into a new squares array       
    squares.push(square);
    }
    console.log(squares);

}
createGrid()

currentSnake.forEach(index => squares[index].classList.add("snake"));

function move(){

    const tails = currentSnake.pop();
    //console.log(tails);
    //console.log(currentSnake);
    squares[tails].classList.remove("snake");

    currentSnake.unshift(currentSnake[0] + direction);
    //console.log(currentSnake);  
    squares[currentSnake[0]].classList.add("snake");
}

move();

let timerId = setInterval(move, 1000);

function control(e){
    if(e.keyCode === 39){
        console.log("right pressed");
        direction = 1;
    }else if(e.keyCode === 38){
        console.log("up pressed");
        direction = -width;
    }else if(e.keyCode === 37){
        console.log("left pressed");
        direction = -1;
    }else if(e.keyCode === 40){
        console.log("down pressed");
        direction = +width;
    }
}

document.addEventListener("keyup", control);