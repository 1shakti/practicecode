import { Animals, Cat} from './p_export_js2.js';

let animal = new Animals('cat',4);
console.log(`${animal.type} ${animal.legs}`);
let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData);

class Player {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    
    message(){
        console.log(`${this.name} was born in ${this.country}`);
    }
}

class TennisPlayer extends Player {
    constructor(name, country,age){
    super(name,country);
    this.age = age;    
    }
    
    
    intro(){
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`); 
    }

    
}


let call = new Player("Messi", "Argentina");
let msg = call.message();

let callten = new TennisPlayer("Messi", "Argentina",34);
callten.intro();
