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



function filterArray(array, callback){

    const resultingArray = [];

    for( item of array){

        const shouldbeInclued = callback(item);
        if(shouldbeInclued){
            resultingArray.push(item)
        }
    }
    return resultingArray;
}



const peopleWithPetss = filterArray(people, function(person) {
    return person.hasPet
})

console.log(peopleWithPetss);



//Array .filter and .map

/**
 * Challenge: method chaining!
 * 
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 * 
 * 2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]



const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email);
console.log(finalResult);





/**
 * Time to be curious!
 * 
 * What would happen if you didn't return `res.json()` 
 * from the first .then block?
 * 
 * What would the next .then() callback receive as its 
 * parameter if you returned something totally different??
 */

/**
 * Challenge:
 * 
 * pass the string "World" down to a 3rd .then() block
 * and log it to the console inside the body of this new
 * 3rd .then() block
 */

 fetch("https://apis.scrimba.com/bored/api/activity")
 .then(function(res) {
     return "Hello"
 })
 .then(function(whatever) {
     console.log(whatever)
     return "World"
 })
 .then(function(another) {
     console.log(another)
 })