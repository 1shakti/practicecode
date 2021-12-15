/*********   Template Literals start ************/

let name = "Lebron James";
let city = "Los Angeles";

let normalway = name + " lives for " + city;

let templateliterals = `${name} live for ${city}`;

console.log(`${normalway} ${templateliterals}`);

/*********   Template Literals end   ************/

/****************** Distructuring object start*********************/

let player = {
    name_d: "Lebron James",
    club: "LA Lakers",
    address: {
        city_d: "Los Angeles"
    }
}

let normal = player.name + player.address.city;
console.log(normal);

//distructuring object
let {name_d, club, address: { city_d }} = player;

console.log(`${name} lives for ${city}`);

/****************** Distructuring object end *********************/

/****************** Distructuring array start *********************/

let [firstname,middlename,lastname] = ['Dylan', 'Coding God', 'Israel'];
console.log(firstname);



function addressMaker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});


/****************** Distructuring array end *********************/

/****************** for loop *********************/

let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes){
    console.log(income);
    total += income;
}
console.log(`total income ${total}`);


let fullName = "Dylan Coding God Israel";

for (const char of fullName) {
    console.log(char);
}


const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]


for (const student of students){
 
    console.log(student);
    console.log(`${student.name} ${student.city}`);
    const {name,city} = student;
    
    console.log(`${student.name} lives in ${student.city}`);
    
}

/****************** for loop end*********************/

/******************spread operator********************/

let contacts = ["Mary", "Joel", "Danny"];

let personalfriends = ["David", ...contacts, "Lily"];

contacts.push("John");
console.log(contacts);
console.log(personalfriends);

let person = {
    name: "Adam",
    age: "26",
    city: "Manchester"
}
console.log(person);

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);



/**************spread operator end************************/

/************** rest operator ****************************/
//normal way
function addnum(num){
    console.log(num) //output will be first array
    console.log(arguments); //output will be complete array
}

addnum(4,5,6,7,8,5,4);
//using rest operator
function addnums(...nums){
    console.log(`respop ${nums}`) //output will be first array
}

addnums(4,5,6,7,8,5,4);
/************** rest operator end****************************/

/**************  Arrow function  ****************************/

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}
console.log(breakfastMenu());

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}
console.log(lunchMenu());

//arrow function
let dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner`;
}

dinnerMenu = food => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken salad"));

dinnerMenu = (food,drink) => `I'm going to eat a ${food,drink} for dinner`;
console.log(dinnerMenu("chicken salad"));
/***************Arrow function End*************************/

/*************** Deafult parameter start*************************/

const foodname = (food = "something") => {
    return `I'm going to buy ${food} from the grocery shop`;
}

console.log(foodname("chicken"));

/*************** Deafult parameter end *************************/

/*************** Includes function start ************************/
const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if(listIngredients.includes("chocolate")){
    console.log("We are going to make a chocolate cake");
}else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");  
}
/*************** includes function end ************************/

/*************** import and export start ************************/
//in file p_js1.js
export const data = [1,2,3];

//in index.js file
import { data } from './p_js1.js';
console.log(data);

/*************** import and export end *************************/
/*************** pad start and pad end ***********************/

let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(100).length);
console.log(example.padEnd(1));

/*************** pa start and pad end **************************/