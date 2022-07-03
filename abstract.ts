abstract class StreetFighter {
    constructor() { }
    move() { }
    fight() { 
        console.log(`attack with ${this.getSpecialAttact()}`)
    }
    abstract getSpecialAttact(): string
}

class Ryu extends StreetFighter{
    getSpecialAttact(): string {
        return "Hadoken"
    }
}


const ryu = new Ryu()
console.log(ryu.getSpecialAttact())
ryu.fight()