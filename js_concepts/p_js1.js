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