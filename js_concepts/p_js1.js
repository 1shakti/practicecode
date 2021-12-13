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

/****************** Distructuring array end *********************/

