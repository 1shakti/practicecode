/**
 Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
 */

document.getElementById("card-btn").addEventListener("click", function(){

    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")    
        .then(resp => resp.json())
        .then(data => {
        
            console.log(data)
            
        })
})


/**
 * Challenge: 
 * 
 * Part 1: write a `setTimeout` command. Have it wait for 2000 ms before logging "I finally ran!" to the console
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */


function callback(){
    console.log("I finally ran!");
}

setTimeout(callback, 2000);



// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

/**
 * Challenge: 
 * 
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 * 
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

 const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

//differnet ways to write function 
var peopleWithpets = people.filter(function pets(person){
    return person.hasPet
 
})

console.log(peopleWithpets)

//second type arrow function

 peopleWithpets = people.filter((person) => {
    return person.hasPet
 
})

console.log(peopleWithpets)

//callback function

var gimmeThePets = person => person.hasPet;
peopleWithpets = people.filter(gimmeThePets)
console.log(peopleWithpets)


// Filter array logic


/**
 * Challenge: 
 * 
 * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 * 
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

 const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]


function firstArray(array, callback){

    const resultingArray = [];

    for( item of array){
        const shouldbeInclued = callback(item);
        if(shouldbeInclued){
            resultingArray.push(item)
        }
    }
    return resultingArray;
}