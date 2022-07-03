let userName = "Do"
let hasLoggedIn = false

userName += " Hai"
console.log(hasLoggedIn)

let myNumber: number = 10

let myRegex: RegExp = /foo/
const names: string[] = userName.split(" ")
const myValues: Array<string> = ["test", "test2"]

interface Person {
    first: string,
    last: string
}

const myPerson: Person = {
    first: "Do",
    last: "Hai"
}

const ids: Record<number, string> = {
    10: "test1"
}

ids[20] = "test2"

if (ids[30] === "D") {

}

[1, 2, 3].forEach((v) => console.log(v * 3))

const out = [1, 2, 4].map((v) => `${v * 3}`)
