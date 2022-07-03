// type MyFlexibleDogInfo = {
//     name: string
// } & Record<string, string>

type MyFlexibleDogInfo = {
    name: string
    [key: string]: string | number;
}


const dog: MyFlexibleDogInfo = {
    name: "LG",
    breed: "Mutt",
    // test: {}
}

interface DogInfo {
    name: string
    age: number
}

type OptionsFalgs<Type> = {
    
}