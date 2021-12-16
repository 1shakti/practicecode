export class Animals{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    makeNoise( sound = "Loud sound" ){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return(){
        return 10;
    }
}

export class cat extends Animals{
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

