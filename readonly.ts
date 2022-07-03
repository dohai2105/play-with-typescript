class Doggy {
    constructor(public readonly name: string, public readonly age: number) { }
}


const lgg = new Doggy("LG", 123)
// lgg.name = "fdafds"

console.log(lgg.name)


class DogList {
    private doggies: Doggy[] = []
    static instance: DogList = new DogList()
    private constructor() {}
    static addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog)
    }
    getDogs() {
        return this.doggies
    }
}

DogList.addDog(lgg)
console.log(DogList.instance.getDogs())